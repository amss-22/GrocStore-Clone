import { Heading, Flex, Box, Text, Button, Image } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./CartPage.css";
import {Link} from "react-router-dom";
import { resetList } from '../redux/CartReducer/action';




const CartPage = () => {
const [cart, setCart] = useState([]);
const [total, setTotal] = useState(0);
const dispatch = useDispatch();

const c = useSelector(store=> store.cartReducer.cart);
 console.log("cart", c);
 
 setTimeout(()=>{
  getTotal();
},100);

 React.useEffect(()=>{
  setCart([...c]);
  
 },[])

 
const handleEmpty = ()=>{
     dispatch(resetList())
}

const setQty = (id)=>{

  let c = cart;
  c.map(c=>{
    if(c.id==id){
      c.qty+=1;
      console.log(c.qty,parseInt(c.price),c.subtotal)
      let price = c.qty*parseInt(c.price);
      c.subtotal = price;
    }
  });

  getTotal();

  setCart([...c]);
}

const removeQty = (id)=>{
  getTotal();
  let c = cart;
  c.map(c=>{
    if(c.id==id){
      if(c.qty>1){
        c.qty-=1;
        let price = c.qty*parseInt(c.price);
        c.subtotal = price;
      }
      
    }
  });
  setCart([...c]);
}
const deleteQty = (id)=>{
  getTotal();
  let c = cart;
  c = c.filter(ca=>ca.id!=id);
  console.log(c)
  setCart([...c]);
  
}

const getTotal = ()=>{
  let t = 0;
  let c = cart;
  console.log(c)
  c.map(item=>{
    t+= item.subtotal;
  });
  
  return setTotal(t.toFixed(2));
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
     <table className='table_div'>
      <thead>
      <tr>
        <th>IMAGE</th>
          <th>ITEM DESCRIPTION</th>
          <th>UNIT PRICE</th>
          <th>QUANTITY</th>
          <th>ACTION</th>
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
              <hr style={{border:"2px solid green", width:"504%", backgroundColor: "green"}} />
            </td>
            <td id="prod" >{item.product_info}</td>
            <td>{item.price}</td>
            <td id='qyt'>
              <button  onClick={()=>removeQty(item.id)} >-</button>
              <p>{item.qty}</p>
              <button  onClick={()=>setQty(item.id)} >+</button>
            </td>
            <td id='dlet'>
              <button  onClick={()=>deleteQty(item.id)} className="delet_button" >Remove</button>
            </td>
            <td>{item.subtotal}</td>
            
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