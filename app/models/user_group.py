from .db import db


class User_Group(db.Model):
    __tablename__ = 'users_groups'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    groups_id = db.Column(db.Integer, db.ForeignKey(
        "groups.id"), nullable=False)

    def to_dict(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "groups_id": self.groups_id
        }
