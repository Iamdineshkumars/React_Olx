import React, { useContext } from 'react'
import { Context } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
 const{authState} = useContext(Context)

 return authState.isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRoute