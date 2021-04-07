import React from "react";
import { useSelector } from "react-redux";

import "./MyGroups.css";

export default function Groups() {
  const allUserGroups = useSelector((state) => Object.values(state.userGroup));

  let userGroups = allUserGroups.map((each) => {

    return (
      <div className="userGroups-each" key={each.id}>
        <a className="userGroups-name" href='/'>{each.name}</a>
        </div>
    );
  });


  return userGroups;
}

