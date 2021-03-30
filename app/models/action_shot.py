from .db import db


class Action_Shot(db.Model):
    __tablename__ = 'action_shots'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    photo_url = db.Column(db.String, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user.id,
            "photo_url": self.photo_url
        }
