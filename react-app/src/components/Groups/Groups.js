import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalGroup from "../GroupsModal/GroupsModal";

//store
import { getAllGroups } from "../../store/groups";

//images

import boxer1 from "../../images/group/box1.jpg";
import boxer2 from "../../images/group/box2.jpg";
import boxer3 from "../../images/group/box3.jpg";
import boxer4 from "../../images/group/box4.jpg";
import boxer5 from "../../images/group/box5.jpg";
import boxer6 from "../../images/group/box6.jpg";

import "./Groups.css";

export default function Groups() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const groups = useSelector((state) => Object.values(state?.groups));
  const [groupModalIsOpen, setGroupModalisOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllGroups());
  }, [dispatch]);

  const backgroundImages = [boxer1, boxer2, boxer3, boxer4, boxer5, boxer6];

  // modal
  const changeGroupModal = () => {
    setGroupModalisOpen(true);
  };

  // add background images to the groups
  // also renders each group block
  let allGroups = groups.map((each, index) => {
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
            <a className="groups-name" href="/">
              <h2>{each.name}</h2>
            </a>
          </div>
        </div>
        </a>
      </>
    );
  });

  // rendered on page
  return (
    <div>
      <div className="groups-top_button_newGroup-container">
        <button id="groups-top_button_newGroup" onClick={changeGroupModal}>
          Start a new group.
        </button>
        <ModalGroup
          groupModalIsOpen={groupModalIsOpen}
          setGroupModalisOpen={setGroupModalisOpen}
        />
      </div>
      <div className="groups-container">{allGroups}</div>
    </div>
  );
}
