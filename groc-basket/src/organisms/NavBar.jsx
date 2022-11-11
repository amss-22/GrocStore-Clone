import SearchFunc from "../Components/Navbar/SearchFunc";
import styled from "styled-components";
import { BsTelephoneOutbound, IconName } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { BsBasketFill } from "react-icons/bs";
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
} from "@chakra-ui/react";
import image from "../images/logo.png";
import { ShopByCategory } from "../Components/Navbar/ShopByCategory";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
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
      
      <Box border="1px solid green"  bg="#e0e0d1"  >
        <Box display="flex" width="90%" border="1px solid black" margin="auto" justifyContent="space-between" alignItems="center" position="relative">
          <Image src={image} alt="Dan Abramov" boxSize="70px" border="1px solid pink"/>

        <SearchFunc />

        <BsBasketFill size="30px"/>

        </Box>
       
       
     
      </Box>
      <ShopByCategory sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
};

export default Navbar;
