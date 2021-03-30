from .db import db


class Stock_Workout(db.Model):
    __tablename__ = 'stock_workouts'

    id = db.Column(db.Integer, primary_key=True)
    coach_photo_url(db.String, nullable=False)

    def to_dict(self):
        return{
            "id": self.id,
            "coach_photo_url": self.coach_photo_url
        }
