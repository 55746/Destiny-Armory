from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
class Weapon(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        weapon_name=db.Column(db.String(120), nullable=False)
        weapon_type=db.Column(db.String(20), nullable=False)
        weapon_class=db.Column(db.String(20), nullable=False)
        weapon_lore=db.Column(db.String(1000), nullable=False)
        # locationImg=
        # gunImg = 

        def __repr__(self):
            return f'<Weapon {self.weapon_name}>' 

        def serialize(self):
            return {
                "id": self.id,
                "weapon_name": self.weapon_name,
                "weapon_type": self.weapon_type,
                "weapon_class": self.weapon_class,
                "weapon_lore": self.weapon_lore,
                # "locationImg": "...",
                # "gunImg": "..."
                # do not serialize the password, its a security breach
            }