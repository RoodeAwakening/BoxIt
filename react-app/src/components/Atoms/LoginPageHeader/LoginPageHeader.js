import React from 'react'
import styles from './LoginPageHeader.module.css'

function LoginPageHeader({headerText, subHeaderText}) {
  return (
    <div className={styles.LoginPageHeader__container}>
      <h1 className={styles.LoginPageHeader__h1}>{headerText}</h1>
      <h2 className={styles.LoginPageHeader__h2}>{subHeaderText}</h2>
    </div>
  )
}

export default LoginPageHeader
