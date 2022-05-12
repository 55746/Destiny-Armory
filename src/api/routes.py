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

@api.route('/exotics', methods=['POST','GET'])
def login_user():
    response_body= request.get_json()
    print(response_body)
    # exoticModel= Weapons.query.filter(Weapons.weapon_name == response_body['weapon_name'], Weapons.weapon_type == response_body['weapon_type'],Weapons.weapon_lore == response_body['weapon_lore'])
    exoticWeapons=Weapon(weapon_name=response_body['weapon_name'], weapon_type=response_body['weapon_type'],weapons_lore=response_body['weapon_lore'])
    db.session.add(exoticWeapons)
    db.session.commit()
    return "[]", 200