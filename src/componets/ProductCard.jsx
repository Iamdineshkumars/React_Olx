import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Wrapper from '../assets/home'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  const [data,setData]= useState([])
  const fetchData = async()=>{
    const response = await axios.get(`http://localhost:3000/products`)
    setData(response.data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <Wrapper> 
    <div className='cart_main'>
      {data.map((items)=>{
        return ( 
          <div className='cart' key={items.id}>
            <Link to={`/product/${items.id}/view`} >
          <img src={items.images[0]}
          className='images'/></Link>
          <h3 className='font-style'>{items.title}</h3>
          <p className='font-style'>Price:₹{items.price}</p>
          <p className='font-style'>{items.location}</p>
        </div>
      )
      })}
    </div>
    </Wrapper>
  )
}

export default ProductCard