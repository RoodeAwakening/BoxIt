from .db import db


class User_Group(db.Model):
    __tablename__ = 'user_groups'

    id = db.Column(db.Integer, primary_key=True)
    users_id = db.Column(db.Integer, ForeignKey("users.id"), nullable=False)
    groups_id = db.Column(db.Integer, ForeignKey("groups.id", nullable=False))

    def to_dict(self):
        return{
            "id": self.id,
            "users_id" = self.users_id,
            "groups_id" = self.groups_id
        }
