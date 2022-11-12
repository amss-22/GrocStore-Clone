import { Heading } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import "./CartPage.css";

// const Data = [
//   { name: "Pateto", qyt: 1, price: "25" },
//   { name: "Tomato", qyt: 2, price: "30" },
//   { name: "Onion", qyt: 1, price: "50"},
// ]

const CartPage = () => {
const [add, setAdd] = useState(1);
const Cart_Products=useSelector((state)=> state.cartReducer.cart)

console.log(Cart_Products)

  const Data = [
    { name: "Pateto", qyt: 1, price: "25" },
    { name: "Tomato", qyt: 2, price: "30" },
    { name: "Onion", qyt: 1, price: "50"},
  ]

  return (
    <div>
     <Heading color={"gray.500"}> Your Basket </Heading>
      <hr style={{
            color: "gray",
            backgroundColor: "gray",
            height: 3
        }}
       />
     <table>
      <tr>
          <th>ITEM DESCRIPTION</th>
          <th>UNIT PRICE</th>
          <th>QUANTITY</th>
          <th>SUBTOTAL</th>
      </tr>
      {
        Data.map((item)=>(
          <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td id='qyt'>
              <button onClick={()=> setAdd(add-1)} >-</button>
              <p>{add}</p>
              <button onClick={()=> setAdd(add+1)} >+</button>
            </td>
            <td>{item.price*add}</td>
          </tr>
        ))
      }
     </table>
    <div>

    </div>
    </div>
  )
}

export default CartPage;