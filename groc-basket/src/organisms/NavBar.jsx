import SearchFunc from "../Components/Navbar/SearchFunc";
import { BsTelephoneOutbound} from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineShoppingCart } from "react-icons/ai";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
  Box,
  Image,
  Heading,
} from "@chakra-ui/react";
import image from "../images/logo.png";
import { ShopByCategory } from "../Components/Navbar/ShopByCategory";
import { useSelector } from "react-redux";
import '../pages/Login';




const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const cart = useSelector((state) => state.cartReducer.cart);
 

  return (
    <div className="nav_main">
      <Box className="nav_div" >
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

      <Box className="center_nav" bg="#e0e0d1">
        <Box className="center_nav_child">
          <Link to="/">
            <Image src={image} alt="Dan Abramov" boxSize="70px" />
          </Link>

          <SearchFunc />
          <Box display="flex">
            <Box cursor="pointer">
              <Link to="/Cart">
                <AiOutlineShoppingCart size="30px" />
              </Link>
            </Box>

            <Menu>
              <MenuButton as={Button} className="cart_icon" rightIcon={<AiOutlineDown />} bg="">
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
