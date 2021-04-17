import React from "react";
import * as classes from "./ProgressPhotos.module.css";

export default function ProgressPhotos() {
  return (
    <div className={classes.progress_photos__container}>
      <div className={classes.progress_photos__user_images}>
        <img src="https://cdn.shopify.com/s/files/1/2224/2181/files/BSL_DomMountatin_square_for_site_x800.jpg?v=1574552341" />
      </div>
      <div className={classes.progress_photos__user_images}>
        <img src="https://imgix.ranker.com/list_img_v2/4526/2084526/original/youtube-broscience-videos?w=817&h=427&fm=jpg&q=50&fit=crop" />
      </div>
    </div>
  );
}
