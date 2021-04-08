from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

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
            "content": self.content,
            "photo_url": self.photo_url,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
        }
