from .db import db


class Stock_Workout(db.Model):
    __tablename__ = 'stock_workouts'

    id = db.Column(db.Integer, primary_key=True)
    coach_photo_url = db.Column(db.String, nullable=False)
    audio_url = db.Column(db.String, nullable=False)

    # RELATIONSHIPS
    users_workouts = db.relationship("User_Workout", backref="stock_workouts")

    def to_dict(self):
        return{
            "id": self.id,
            "coach_photo_url": self.coach_photo_url,
            "audio_url": self.audio_url
        }
