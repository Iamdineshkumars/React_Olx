import React, { useContext, useRef, useState } from 'react'
import { Context } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrapper/login'

const Login = () => {

  const {loginUser} = useContext(Context)
  const [email,setEmail] =useState("")
  const [password,setPassword] = useState("")
   function handleSubmit(event){
    event.preventDefault()
    loginUser(email,password)
 

   }
  return (
    <Wrapper>
         <div className='parent'>
         <h1 className='title'>Login</h1>
       <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='' className='label'>Email:</label> <br/>
        <input type='email' placeholder='enter Email'  value={email} onChange={(event)=>{setEmail(event.target.value)}} className='text-field'/><br/>
        <label htmlFor='' className='label'>Password</label><br/>
        <input type='password' placeholder='Enter Password' value={password} onChange={(event)=>{setPassword(event.target.value)}} className='text-field'/><br/>
        <button type='submit' className='btn'>submit</button>
       </form>
       <div><p className='link_back'>go back:<Link to={"/"}>Home</Link></p></div>
       <div>
       bruce@wayne.com
       gotham123
       </div>
       
    </div>
    </Wrapper>
  )
}

export default Login