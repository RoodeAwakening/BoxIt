import React from 'react'
import LoginPageVideo from '../../Atoms/LoginPageVideo/LoginPageVideo'
import LoginPageDisplayBlock from '../../Molecules/LoginPageDisplayBlock/LoginPageDisplayBlock'
import styes from './LoginPage.module.css'

function LoginPage() {
  return (
    <div>
      <LoginPageVideo/>
      <LoginPageDisplayBlock/>
      
    </div>
  )
}

export default LoginPage
