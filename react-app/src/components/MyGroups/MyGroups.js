import React from "react";
import { useSelector } from "react-redux";

import "./MyGroups.css";

export default function Groups() {
  const allUserGroups = useSelector((state) => Object.values(state.userGroup));

  let userGroups = allUserGroups.map((each) => {
    return (
      <div className="userGroups-each">
        <a className="userGroups-name" href='/'>{each.name}</a>
        </div>
    );
  });
  console.log("groups", userGroups);

  return userGroups;
}

// # Get all user groups
// @group_routes.route('/user_group', methods=['GET', 'POST'])
// # Get single user group
// @group_routes.route('/user_group/<int:id>', methods=['GET','DELETE'])
