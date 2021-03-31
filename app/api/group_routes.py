from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms import group_form
from app.models import Group, db


group_routes = Blueprint('groups', __name__)


@group_routes.route('/', methods=['GET', 'POST'])
# @login_required
def groups():
    method = request.method
    if method == 'GET':
        groups = Group.query.all()
        return {"groups": [group.to_dict() for group in groups]}
    elif method == 'POST':
        group_name = request.json['name']
        group = Group(name=group_name)
        db.session.add(group)
        db.session.commit()
        return jsonify(group.to_dict())


@group_routes.route('/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
# @login_required
def individual_groups(id):
    method = request.method
    if method == 'GET':
        group = Group.query.get(id)
        return jsonify(group.to_dict() if group else 'No Group Exists')
    elif method == 'PATCH':
        group = Group.query.get(id)
        if group:
            name = request.json['name']
            group.name = name
            db.session.commit()
        return jsonify(group.to_dict() if group else 'No Group Exisxts')
        return "Patch"
    elif method == 'DELETE':
        success = Group.query.filter(Group.id == id).delete()
        db.session.commit()
        return jsonify('Successfully deleted' if success else 'No Group Exists')


@group_routes.route('/<int:id>/comments', methods=['GET', 'POST'])
def group_comments(id):
    method = request.method
    if method == 'GET':
      return "stuff"
    if method == 'POST':
      return 'STuffMore'
