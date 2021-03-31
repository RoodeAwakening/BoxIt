from flask import Blueprint, jsonify, request
from app.models import Progress_Photo, db
from flask_login import login_required, current_user


progress_photos_route = Blueprint('progress_photos', __name__)


@progress_photos_route.route('/', methods=['GET', 'POST'])
# @login_required
def progress_photo():
    method = request.method
    if method == 'GET':
      # Get all the progress photos
        # REPLACE WITH current_user.id
        user_photos = Progress_Photo.query.filter(Progress_Photo.user_id == 1)
        return {"progress_photo": [user_photo.to_dict() for user_photo in user_photos]}
    elif method == 'POST':
      # Create a progress photo
        new_photo = request.json['progress_photo']
        # REPLACE WITH current_user.id
        photo = Progress_Photo(user_id=1, photo_url=new_photo)
        db.session.add(photo)
        db.session.commit()
        return {'new_progress_photo': [photo.to_dict()]}


@progress_photos_route.route('/<int:id>', methods=['GET', 'DELETE'])
# @login_required
def individual_progress_photo(id):
    method = request.method
    if method == 'GET':
        single_progress_photo = Progress_Photo.query.get(id)
        return {'single_progress_photo': [single_progress_photo.to_dict()] if single_progress_photo else 'No Photo Exists'}
    elif method == 'DELETE':
        success = Progress_Photo.query.filter(Progress_Photo.id == id).delete()
        db.session.commit()
        return jsonify("Successfully deleted" if success else 'No Progress Photo Exists')
