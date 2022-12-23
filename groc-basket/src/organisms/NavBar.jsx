
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import SearchFunc from "../Components/Navbar/SearchFunc";
import styled from "styled-components";
import { BsTelephoneOutbound, IconName } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { BsBasketFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useMediaQuery } from '@chakra-ui/react'

import { AiOutlineDown, AiOutlineShoppingCart } from "react-icons/ai";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Box,
  Image,
  Heading,
} from "@chakra-ui/react";
import image from "../images/logo.png";
import { ShopByCategory } from "../Components/Navbar/ShopByCategory";

import { useSelector } from "react-redux";

const Navbar = () => {

  const [isLargerThan100] = useMediaQuery('(min-width: 100px)')
  const [sidebar, setSidebar] = useState(false);
  const cart = useSelector((state) => state.cartReducer.cart);
 

  return (
    <div>
      <Box display="flex" justifyContent="end" gap="20px">
        <Box display="flex" gap="2px" px="20px">
          <div>
            <BsTelephoneOutbound color="#012652" />
          </div>
          <p>1860 123 1000</p>
        </Box>
        <Box display="flex" gap="2px" px="20px">
          <div>
            <GrLocation color="#012652" />
          </div>
          <p>110009, India</p>
        </Box>
        <Menu>
          <MenuButton as={Button} bg="#012652" height="22px">
            <FaUser color="white" />
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <Link to="/login">
                <MenuItem>My Account</MenuItem>
              </Link>

              <MenuItem>My Basket</MenuItem>
              <MenuItem>My Orders</MenuItem>
              <MenuItem>My Membership</MenuItem>
              <MenuItem>Wallet</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
              <MenuItem>Customer Service</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>

      <Box bg="#e0e0d1">
        <Box
          display="flex"
          width="90%"
          margin="auto"
          justifyContent="space-between"
          alignItems="center"
          position="relative"
        >
          <Link to="/">
            <Image src={image} alt="Dan Abramov" boxSize="70px" />
          </Link>

          <SearchFunc />
          <Box display="flex">
          
            <Box cursor="pointer">
              <Link to="/Cart">
                {/* <AiOutlineShoppingCart size="30px"  /> */}
                {isLargerThan100 ? <AiOutlineShoppingCart size="40px"  /> : <AiOutlineShoppingCart marginRight="200px"  />}
              </Link>
            </Box>

            <Menu>
              <MenuButton as={Button} rightIcon={<AiOutlineDown />} bg="">
                <Heading size="4x">Items:{cart.length}</Heading>
              </MenuButton>

              
                  <MenuList>

                  {cart.map((item,index)=> {
                   
                    return(
                      <Box key={index} display="flex" alignItems="center" gap="25px" backgroundColor="#E0F7FA" >
                        
                      <Heading size="4" >{index+1}</Heading>
                        <img src={item.img_src} style={{height: "40px"}} />
                      <Heading size="4" color="green.600"  _hover={{
                        background: "white",
                        color: "teal.500",
                      }}>{item.product_info}</Heading>
                      
                      </Box>
                    )
                    {console.log()}
                  })}
                  

                  </MenuList>
            </Menu>
          </Box>
        </Box>
      </Box>
      <ShopByCategory sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
};

export default Navbar;
