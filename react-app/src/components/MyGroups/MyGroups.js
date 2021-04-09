import React from "react";
import { useSelector } from "react-redux";

import "./MyGroups.css";

export default function MyGroups() {
  const allUserGroups = useSelector((state) => Object.values(state.userGroup));

  let userGroups = allUserGroups.map((each) => {

    return (
      <a className="userGroups-name" href={`/groups/${each.id}`} key={each.id}>
      <div className="userGroups-each" >
        {each.name}
        </div>
        </a>
    );
  });


  return userGroups;
}

