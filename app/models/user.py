from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.string(50), nullable=False)
    last_name = db.Column(db.string(50), nullable=False)
    user_name = db.Column(db.String(40), nullable=False, unique=True)
    DOB = db.Column(db.DateTime)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    portfolio_photo = db.Column(db.string, nullable=False)
    boxing_level = db.Column(db.string, nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.hashed_password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "user_name": self.user_name,
            "DOB": self.DOB,
            "email": self.email,
            "portfolio_photo": self.portfolio_photo,
            "boxing_level": self.boxing_level
        }
