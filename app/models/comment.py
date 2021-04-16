from .db import db
from app.models import User
from sqlalchemy.orm import load_only


class Comment(db.Model):
    __tablename__ = 'comments'
    __table_args__ = {'extend_existing': True} 

    id = db.Column(db.Integer, primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey(
        "groups.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    content = db.Column(db.String(140), nullable=False)
    photo_url = db.Column(db.String, nullable=True)
    createdAt = db.Column(db.DateTime, default=db.func.current_timestamp())
    updatedAt = db.Column(db.DateTime, default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    def to_dict(self):




        return{
            "id": self.id,
            "groupd_id": self.group_id,
            "user_id": self.user_id,
            # import the user and query it followed by a function ".comment()" that is written on the user model
            "user": User.query.get(self.user_id).comment(),
            "content": self.content,
            "photo_url": self.photo_url,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt,
        }


# users = User.query.get(self.user_id)
# users.query.select_entities_from(User.id, User.workouts_completed, User.user_name, User.profile_photo)
# User.query.with_entities(User.id, User.workouts_completed, User.user_name, User.profile_photo)
