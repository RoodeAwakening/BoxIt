import React from "react";
import { useSelector } from "react-redux";

import "./MyGroups.css";

//images
import boxer1 from "../../images/group/box1.jpg";
import boxer2 from "../../images/group/box2.jpg";
import boxer3 from "../../images/group/box3.jpg";
import boxer4 from "../../images/group/box4.jpg";
import boxer5 from "../../images/group/box5.jpg";
import boxer6 from "../../images/group/box6.jpg";

export default function MyGroups() {
  const allUserGroups = useSelector((state) => Object.values(state.userGroup));
  const backgroundImages = [boxer1, boxer2, boxer3, boxer4, boxer5, boxer6];

  let userGroups = allUserGroups.map((each, index) => {
    // set the random background
    let randomBackground = () => {
      let pos = Math.floor(Math.random() * (6 - 0));

      return backgroundImages[pos];
    };

    return (
      <>
      <a href={`/groups/${each.id}`}>
        <div className="groups-each" key={index}>
          <div className="groups-each-background">
            <img src={randomBackground()} />
          </div>
          <div className="groups-detail">
            <a className="groups-name" href={`/groups/${each.id}`}>
              <h2>{each.name}</h2>
            </a>
          </div>
        </div>
        </a>
      </>

 
    );
  });


  return userGroups;
}

