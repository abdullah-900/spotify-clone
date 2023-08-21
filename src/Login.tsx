import React from 'react'
import  './Login.scss'
import { Nav } from './Nav'
import { Container } from 'react-bootstrap'
import LoginPanel from './LoginCard'
const Login = () => {
  return (
<div className='loginpage'>
<div className='logincard'>
<LoginPanel/>
</div>
</div>
  )
}

export default Login