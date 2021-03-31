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
