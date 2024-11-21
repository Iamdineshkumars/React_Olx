import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductsDetailsPage from '../pages/ProductsDetailsPage'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
   <>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/product/:id/view' element={<PrivateRoute>
                                                 <ProductsDetailsPage/>
                                               </PrivateRoute>}/>
   </Routes>
   </>
  )
}

export default AllRoutes