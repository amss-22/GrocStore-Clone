import { Heading, Flex, Box, Text, Button, Image } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./CartPage.css";
import {Link} from "react-router-dom";
import { resetList } from '../redux/CartReducer/action';



const CartPage = () => {
const [add, setAdd] = useState(1);
const dispatch = useDispatch();

const cart = useSelector(store=> store.cartReducer.cart);
 console.log("cart", cart);

 let total = 0;
const tsum = [];

cart.map((item)=>{
 return tsum.push(item.price);
})
 for(let i=0; i<cart.length; i++){
     total +=  Math.floor(+(tsum[i]));
 }
console.log("total:", total)

localStorage.setItem("total", JSON.stringify(total))
  
const handleEmpty = ()=>{
     dispatch(resetList())
}


  return (
    <div  >
     <Heading fontWeight={200} m={3} color={"gray.500"}> Your Basket </Heading>
      <hr style={{
            color: "gray",
            backgroundColor: "gray",
            height: 3
        }}
       />
     <table>
      <thead>
      <tr>
        <th>IMAGE</th>
          <th>ITEM DESCRIPTION</th>
          <th>UNIT PRICE</th>
          <th>QUANTITY</th>
          <th>SUBTOTAL</th>
      </tr>
      </thead>
      <tbody>
      {
       cart.length && cart.map((item)=> {
      return (
          <tr key={item.id}>
            <td>
              <Image ml={20} w={"80px"}  h={"90px"} src={item.img_src} />
            </td>
            <td id="prod" >{item.product_info}</td>
            <td>{item.price}</td>
            <td id='qyt'>
              <button onClick={()=> setAdd(add-1)} >-</button>
              <p>{add}</p>
              <button onClick={()=> setAdd(add+1)} >+</button>
            </td>
            <td>{item.price*add}</td>
          </tr>
        )
      })
      }
      </tbody>
     </table>
     <div id='box'>
     <Box  className="empty_basket" >
          <Button id="empty" onClick={handleEmpty} >EMPTY BASKET</Button>
         <Link to="/"><Button bg={'yellow.300'} mt={32}  >CONTINUE SHOPPING</Button></Link>
       </Box >
                <div id="subtotal">
                 <div>
                 <Text fontWeight={400}>Subtotal</Text>
                  <Text fontWeight={400}>Rs {total}</Text>
                 </div>
                 <Flex>
                  <Text fontWeight={500} >Charges</Text>
                  <Text fontWeight={500}>--</Text>
                 </Flex>
                 <hr style={{
            color: "gray",
            backgroundColor: "gray",
            height: 3
        }}
                 />
                 <Flex m={4}>
                  <Text fontSize={22} fontWeight={"medium"} >Total</Text>
                  <Text fontSize={22}>Rs. {total}</Text>
                 </Flex>
                 <Box>
                  <Text>* For this order: Accepted food coupon is Rs. {total}</Text>
                 </Box>
                 <hr style={{
            color: "gray",
            backgroundColor: "gray",
            height: 2
        }}
                 />
                 <Box m={8} ml={32} >
                 <Link to="/Checkout"> <Button bg={"blue.400"} p={6} pr={8} pl={8}  color="black.400"  >CHECKOUT</Button> </Link>
                 </Box>
                 <Text mb={10}>** Actual delivery charges computed at checkout time</Text>
                 </div>
                 
     </div>
    </div>
  )
}

export default CartPage;