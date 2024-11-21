import { createContext, useState } from "react";
import axios from 'axios'
export const Context = createContext();


const AuthContext =({children})=>{
  const [authState,setAuthState] = useState({
   isAuth:false,
   userDetails:null
  })
  const loginUser =async(email,password)=>{
      //setAuthstate({...authstate})
    try{
     const response = await axios.post(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login`,{
      email,
      password
     })
     console.log(response.data)
     if(response.data !== ""){
      setAuthState({isAuth:true,userDetails:{email:email,token:response.data.token}})
     }
    }
    catch(error){
      console.log(error)
    }
  }
  const logoutUser =()=>{
    setAuthState({
      isAuth:false,
      userDetails:null
    })
  }
  console.log(authState.userDetails)

  return(
    <Context.Provider value={{authState,setAuthState,loginUser,logoutUser}}>
      {children}
    </Context.Provider>
  )
}

export default AuthContext