from .db import db


class User_Workout(db.Model):
    __tablename__ = 'users_workouts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    stock_workouts_id = db.Column(db.Integer, db.ForeignKey(
        "stock_workouts.id"), nullable=False)
    favorited = db.Column(db.Boolean, default=False, nullable=False)
    progress_completed = db.Column(db.Boolean, default=False, nullable=False)

    def to_dict(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "stock_workouts_id": self.stock_workouts_id,
            "favorited": self.favorited,
            "progress_completed": self.progress_completed
        }
