"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Weapon
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/exotics', methods=['GET'])
def gunsgunsguns():
    weapons=Weapon.query.all()
    weapons_list=list(map(lambda x: x.serialize(), weapons))
    return jsonify(weapons_list), 200

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

# @app.route('/charachters/<int:charachters_id>', methods=['DELETE'])
# def delete_charachter(charachters_id):
#     charachter_id = Charachters.query.get(charachters_id)
#     print(charachter_id)
#     if charachter_id is None:
#         raise APIException(
#             'This charachter doesnt exist, or has already been deleted', status_code=404)
#     db.session.delete(charachter_id)
#     db.session.commit()
#     return f"It has been succesfully deleted", 200

@api.route('/exotics', methods=['POST'])
def access_weapons():
    response_body = request.get_json()
    # exoticModel= Weapons.query.filter(Weapons.weapon_name == response_body['weapon_name'], Weapons.weapon_type == response_body['weapon_type'],Weapons.weapon_lore == response_body['weapon_lore'])
    exoticWeapons=Weapon(weapon_name=response_body['weapon_name'], weapon_type=response_body['weapon_type'],weapon_class=response_body['weapon_class'], weapon_lore=response_body['weapon_lore'])
    db.session.add(exoticWeapons)
    db.session.commit()
    return jsonify(exoticWeapons.serialize()), 200

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
