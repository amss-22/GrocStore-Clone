import React from 'react'
import { useSelector } from 'react-redux'


const SingleProduct = () => {
  const single=useSelector((state)=> state.SingleProductReducer.singleData)
  // console.log("single",single)
  return (
    <div>{single.product_info}</div>
  )
}

export default SingleProduct