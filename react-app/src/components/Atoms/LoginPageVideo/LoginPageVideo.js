import React from 'react'
import styles from './LoginPageVideo.module.css'

function LoginPageVideo() {
  return (
    // if you want a video to play just uncomment out the video 
    <div className={styles.login__background_container}>

    <image className={styles.login__background_Image} src={'https://www.oxfordmail.co.uk/resources/images/10763753/'}/>
    {/* <div className={styles.login__background_gradient}> */}

    <video
          className={styles.login__background_video}
          src="https://boxit.s3.us-east-2.amazonaws.com/video/welcomeHeaderVideo.m4v"
          autoPlay
          loop
          muted
          
          />
          </div>
          // </div>
  )
}

export default LoginPageVideo
