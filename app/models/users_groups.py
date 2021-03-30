from .db import db


class User_Group(db.Model):
    __tablename__ = 'user_groups'

    id = db.Column(db.Integer, primary_key=True)