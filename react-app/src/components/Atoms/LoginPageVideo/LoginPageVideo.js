import React from 'react'
import styles from './LoginPageVideo.module.css'

function LoginPageVideo() {
  return (
    // if you want a video to play just uncomment out the video 
    <div >

    <image className={styles.login__background_Image} src={'https://www.oxfordmail.co.uk/resources/images/10763753/'}/>
    <video
          className={styles.login__background_video}
          src="https://boxit.s3.us-east-2.amazonaws.com/video/welcomeHeaderVideo.m4v"
          autoPlay
          loop
          muted
          />
          </div>
  )
}

export default LoginPageVideo
