import React from 'react'
import LoginPageHeader from '../../Atoms/LoginPageHeader/LoginPageHeader'
import LoginPageButton from '../../Atoms/LoginPageButton/LoginPageButton'
import styles from './LoginPageDisplayBlock.module.css'


function LoginPageDisplayBlock() {
  return (
    <div className={styles.login__background}>
      <div className={styles.login__container}>
      <LoginPageHeader 
      headerText={'Your AI Boxing Coach'} 
      subHeaderText={'Unlock a BETTER , FITTER, HEALTHIER You!'}
      />
      <LoginPageButton
      text={'Sign up today'}
      // onClick={}
      />
      <LoginPageHeader 
      
      subHeaderText={'Already have an account?'}
      />
      <div className={styles.login__container_login}>

      <LoginPageButton
      text={'Login'}
      // onClick={}
      />
      <LoginPageButton
      text={'Demo'}
      // onClick={}
      />
      </div>
      </div>
    </div>
  )
}

export default LoginPageDisplayBlock
