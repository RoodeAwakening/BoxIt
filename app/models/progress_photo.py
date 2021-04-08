from .db import db


class Progress_Photo(db.Model):
    __tablename__ = 'progress_photos'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    photo_url = db.Column(db.String, nullable=False)
    createdAt = db.Column(db.DateTime, default=db.func.current_timestamp())
    updatedAt = db.Column(db.DateTime, default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    def to_dict(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "photo_url": self.photo_url,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
        }
