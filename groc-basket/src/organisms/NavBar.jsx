import SearchFunc from "../Components/Navbar/SearchFunc";
import styled from "styled-components";
import { BsTelephoneOutbound, IconName } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { BsBasketFill } from "react-icons/bs";
import {AiOutlineDown, AiOutlineShoppingCart} from "react-icons/ai"

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
  const [sidebar, setSidebar] = useState(false);
  const cart = useSelector((state) => state.cartReducer.cart);
  console.log(cart)

  return (
    <div>
      <Box
        display="flex"
        border="1px solid red"
        justifyContent="end"
        gap="20px"
      >
        <Box display="flex" border="1px solid blue" gap="2px" px="20px">
          <div>
            <BsTelephoneOutbound color="#012652" />
          </div>
          <p>1860 123 1000</p>
        </Box>
        <Box display="flex" border="1px solid blue" gap="2px" px="20px">
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
              <MenuItem>My Account</MenuItem>
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

      <Box border="1px solid green" bg="#e0e0d1">
        <Box
          display="flex"
          width="90%"
          border="1px solid black"
          margin="auto"
          justifyContent="space-between"
          alignItems="center"
          position="relative"
        >
          <Image
            src={image}
            alt="Dan Abramov"
            boxSize="70px"
            border="1px solid pink"
          />

          <SearchFunc />
          <Box display="flex">
            <AiOutlineShoppingCart size="30px" />
            
            <Menu>
              <MenuButton as={Button} rightIcon={<AiOutlineDown />} bg="">
              <Heading size="4x">Items:{cart.length}</Heading>
              </MenuButton>
                    {/* <MenuList>
                    <MenuItem>acc</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                  </MenuList>    */}
                  <MenuList>
                  {cart.map((e,index)=> {
                    return(
                      <Box>
                       {e.discount}
                      { console.log(e)}
                      </Box>
                    )
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
