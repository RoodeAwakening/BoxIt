import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//store
import { createGroup} from '../../store/groups'
import { getAllGroups } from "../../store/groups";

import Modal from "react-modal";
import "./GroupsModal.css";

//styling for modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
  },
};

Modal.setAppElement("#root");

export default function ModalGroup({ groupModalIsOpen, setGroupModalisOpen }) {
  const groups = useSelector((state) => Object.values(state?.groups));
  const [errors, setErrors] = useState([]);
  const [groupName, setGroupName] = useState("");

  const dispatch = useDispatch();
  let history = useHistory();



  const onGroupCreate = async (e) => {
    e.preventDefault();
    setErrors([]);
    const group = await dispatch(createGroup({ groupName }));
   
      setGroupModalisOpen(false)
      setGroupName('')
      dispatch(getAllGroups());
    
    return group;
  };

  const updateGroupName = (e) => {
    setGroupName(e.target.value);
  };



  const closeGroupModal = (e) => {
    setGroupModalisOpen(false);
  };

  return (
    <Modal isOpen={groupModalIsOpen} style={customStyles}>
      <div className="group-container-exit">
        <button onClick={closeGroupModal}>
          <i className="fas fa-times groupexit"></i>
        </button>
      </div>

      <div className="group-container">
        <h1>Create a new group.</h1>
        <form onSubmit={onGroupCreate} className="group-form">
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div>
            <div className="group-inputs">
              <input
                name="groupName"
                type="text"
                placeholder="Group Name"
                value={groupName}
                onChange={updateGroupName}
              />
            </div>
           
            <div>
              <button type="submit">Save Group</button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
