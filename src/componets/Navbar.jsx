import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Wrapper from '../assets/wrapper/navbar'
import { Context } from '../context/AuthContext'
const links = [
  {
    path:"/",
  
  },
  {
    path:"/login",
    text:"Login"
  },
 
]
const Navbar = () => {
  //const [email,setEmail] =useState("")
  const {authState,logoutUser} = useContext(Context)
  
  return (
    <Wrapper>
      <div className='nav1'>
        <div className='logo'>React OLX</div>
        
        
      <div className='nav2'>
      <div className="email" >{authState.isAuth ?<p className='welcome'>welcome:bruce@wayne.com</p>:<p style={{color:'white',fontSize:"15px"}}>welcome:</p>}</div>
     <div className='route'> {authState.isAuth ? (<button onClick={logoutUser}>logout</button>):<Link to={"/login"} className='login'>login</Link>} </div>
     
      </div>
    </div>
    </Wrapper>
  )
}

export default Navbar