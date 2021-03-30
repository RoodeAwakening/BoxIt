from .db import db


class Progress_Photo(db.Model):
    __tablename__ = 'progress_photos'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    photo_url = db.Column(db.String, nullable=False)

    def to_dict(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "photo_url": self.photo_url
        }
