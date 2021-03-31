from .db import db


class Group(db.Model):
    __tablename__ = 'groups'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(60), nullable=False)
    # RELATIONSHIPS
    comments = db.relationship("Comment", backref="groups")
    users_groups = db.relationship("User_Group", backref="users_groups")

    def to_dict(self):
        return{
            "id": self.id,
            "name": self.name
        }
