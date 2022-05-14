"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Weapon, Legendaryweapon
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/exotics', methods=['GET'])
def exotic_get():
    weapons=Weapon.query.all()
    weapons_list=list(map(lambda x: x.serialize(), weapons))
    return jsonify(weapons_list), 200

@api.route('/exotics', methods=['POST'])
def access_exoticweapons():
    response_body = request.get_json()
    # exoticModel= Weapons.query.filter(Weapons.weapon_name == response_body['weapon_name'], Weapons.weapon_type == response_body['weapon_type'],Weapons.weapon_lore == response_body['weapon_lore'])
    exoticWeapons=Weapon(weapon_name=response_body['weapon_name'], weapon_type=response_body['weapon_type'],weapon_class=response_body['weapon_class'], weapon_lore=response_body['weapon_lore']) #location_description=response_body['location_description'])
    db.session.add(exoticWeapons)
    db.session.commit()
    return jsonify(exoticWeapons.serialize()), 200

@api.route('/exotics/<int:exotics_id>', methods=['DELETE'])
def exoticsId(exotics_id):
    singleweapon = Weapon.query.get(exotics_id)
    print(singleweapon)
    if singleweapon is None:
        raise APIException(
            'This Weapon doesnt exist, or has already been deleted', status_code=404)
    delete_exotics = db.session.delete(singleweapon)
    db.session.commit()
    return jsonify(singleweapon.serialize())
# THIS IS WHERE WE DO GET FOR LEGENDARY


@api.route('/legendary', methods=['GET'])
def Legendary_get():
    Legendary_get=Weapon.query.all()
    weapons_list=list(map(lambda x: x.serialize(), Legendary_get))
    return jsonify(weapons_list), 200

@api.route('/legendary', methods=['POST'])
def access_legendaryweapons():
    response_body = request.get_json()
    # exoticModel= Weapons.query.filter(Weapons.weapon_name == response_body['weapon_name'], Weapons.weapon_type == response_body['weapon_type'],Weapons.weapon_lore == response_body['weapon_lore'])
    weaponInput=Legendaryweapon(weapon_name=response_body['weapon_name'], weapon_type=response_body['weapon_type'],weapon_class=response_body['weapon_class'], weapon_lore=response_body['weapon_lore'], location_description=response_body['location_description'])
    db.session.add(weaponInput)
    db.session.commit()
    return jsonify(weaponInput.serialize()), 200

@api.route('/legendary/<int:legendary_id>', methods=['DELETE'])
def legendaryId(legendary_id):
    singleweapon = Legendaryweapon.query.get(legendary_id)
    print(singleweapon)
    if singleweapon is None:
        raise APIException(
            'This Weapon doesnt exist, or has already been deleted', status_code=404)
    delete_legendary = db.session.delete(singleweapon)
    db.session.commit()
    return jsonify(singleweapon.serialize())
# @api.route('/exotics/<int:exotics_id>}', methods=['DELETE'])
# def delete_exotics(exotics_id):
#     weapons_id = Weapon.query.get(exotics_id)
#     if weapons_id is None:
#         raise APIException(
#             'This Weapon doesnt exist, or has already been deleted', status_code=404)
#     delete_exotics = db.session.delete(exotics_id)
#     db.session.commit()
#     return f"the {request_body['weapon_name']} has been succesfully deleted", 200
#     # YOU WILL DELEte bY USING THE ID IN THE URL WHEN TRYING TO DELETE IN POSTMAN

@api.route('/exotics/<int:exotics_id>', methods=['DELETE'])
def delete_weapon(exotics_id):
    exotics_id = Weapon.query.get(exotics_id)
    print(exotics_id)
    if exotics_id is None:
        raise APIException(
            'This charachter doesnt exist, or has already been deleted', status_code=404)
    db.session.delete(exotics_id)
    db.session.commit()
    return f"It has been succesfully deleted", 200
