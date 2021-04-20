from flask import Blueprint, jsonify, request
from app.models import Action_Shot, db
from flask_login import login_required, current_user


action_shots_route = Blueprint('action_shots', __name__)


@action_shots_route.route('/', methods=['GET', 'POST'])
# @login_required
def action_shot():
    method = request.method
    if method == 'GET':
        # Get all action shots
        action_photos = Action_Shot.query.order_by((Action_Shot.createdAt).desc()).all()
        return {"action_shots": [action_photo.to_dict() for action_photo in action_photos]}
    elif method == 'POST':
        # post a new action shot
        new_photo = request.json['action_shot_post']
        #REPLACE WITH current_user.id
        shot = Action_Shot(user_id=current_user.id, photo_url=new_photo)
        db.session.add(shot)
        db.session.commit()
        return {'new_action_shot': [shot.to_dict()]}


@action_shots_route.route('/<int:id>', methods=['GET', 'DELETE'])
# @login_required
def indidual_action_shot(id):
    method = request.method
    if method == 'GET':
        # get an individual action shot
        single_action_shot = Action_Shot.query.get(id)
        return {'single_action_shot': [single_action_shot.to_dict()] if single_action_shot else 'No Action Shot Exists'}
    elif method == 'DELETE':
        # delete an individual action shot
        success = Action_Shot.query.filter(Action_Shot.id == id).delete()
        db.session.commit()
        return jsonify("Successfully deleted" if success else 'No Action Shot Exists')
