import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Wrapper from '../assets/wrapper/singleproduct'

const ProductsDetailsPage = () => {
  const [idData,setIdData] = useState({})
  const {id} = useParams()
  console.log(id)
  const getData = async()=>{
    try{
    const response = await axios.get(`http://localhost:3000/products/${id}`)
    setIdData(response.data)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getData()
  },[])
  
  const {title,description,category,price,location,} = idData
  console.log(title,description,category,price,location)
  //const {name,email} = idData.seller
 // console.log(name,email)
  //console.log(idData.seller.name)
  return (
    <Wrapper>
    <div className='parent'>
         <div className='child'>
          <h3 className='font'>{title}</h3>
          <p className='font-style'>{description}</p>
          <p className='font-style'>Category:{category}</p>
          <p className='font-style'>Price:{price}</p>
          <p className='font-style'>Location:{location}</p>

          <img src={idData.images} className='image'/>
         </div>
    </div>
    </Wrapper>
  )
}

export default ProductsDetailsPage