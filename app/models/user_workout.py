from .db import db


class User_Workout(db.Model):
    __tablename__ = 'user_workouts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    stock_workouts_id = db.Column(db.Integer, db.ForeignKey(
        "stock_workouts.id"), nullable=False)
    favorited = db.Column(db.Boolean, default=False, nullable=False)
    favorited_photo_url = db.Column(db.String, nullable=True)
    progress_completed = db.Column(db.Boolean, default=False, nullable=False)

    def to_dict(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "stock_workouts_id": self.stock_workouts_id,
            "favorited": self.favorited,
            "favorited_photo_url": self.favorited_photo_url,
            "progress_completed": self.progress_completed
        }
