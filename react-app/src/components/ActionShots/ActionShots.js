import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ActionShots.css";

//Store Stuff
import { getAllActionShots, newPhoto } from "../../store/ActionShots";

function ActionShots() {
  const dispatch = useDispatch();
  const pictures = useSelector((state) => state?.actionShots.action_shots);


  const [actionPhoto, setActionPhoto] = useState("");
  // add photo
  const onAddPhoto = async (e) => {
    e.preventDefault();
    const photo = await dispatch(
      newPhoto({
        actionPhoto,
      })
    );
    await dispatch(getAllActionShots());
    return photo;
  };

  const updateActionPhoto = (e) => {
    // console.log("-a-", e.target.value);
    setActionPhoto(e.target.files[0]);
  };

  useEffect(() => {
    dispatch(getAllActionShots());
  }, [dispatch]);

  // get each action shot
  const actionShots = () => {
    let pic = pictures.map((picture, index) => {
      console.log(picture.photo_url);

      return (
        <div className="action_photos" key={index}>
          <img src={picture.photo_url} />
        </div>
      );
    });
    return pic;
  };

  return (
    <div className="actionShots-container">
      <h1>Action Shots</h1>
      <div className="actionShots-form-container">
        <form onSubmit={onAddPhoto} className="actionShots-form">
          <div>
          <input
            className="actionShots-form'-photo"
            type="file"
            name="action shot"
            onChange={updateActionPhoto}
            required={true}
          ></input>
          </div>
          <div>
          <button type="submit">Add Your Action Photo</button>
          </div>
        </form>
      </div>
      <div className="action_photos-container">
        {pictures ? actionShots() : "Loading"}
      </div>
    </div>
  );
}

export default ActionShots;
