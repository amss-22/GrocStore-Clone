import React from "react";
import { add_product_to_cart } from "../../redux/CartReducer/action";

import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Stack,
} from "@chakra-ui/react";
import { GiSevenPointedStar } from "react-icons/gi";
import { RiTruckFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { useDispatch } from "react-redux";

const Product_card = ({ item, id, quantity, setQuantity }) => {
  const dispatch = useDispatch();
  // add to cart funtion
  const AddToCart = (item) => {
    // console.log("item", item)
    dispatch(add_product_to_cart(item));
  };
  return (
    <Box
      border="1px solid #f2f2f2"
      h="auto"
      p="5px"
      key={id}
      _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      {/* get offer */}
      <Flex
        p={{ base: "5px", md: "5px 10px" }}
        align="center"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        justify={"right"}
        zIndex={1}
      >
        <Text
          fontSize="10px"
          fontFamily=""
          color="#ba5253"
          textAlign={"right"}
          fontWeight="500"
        >
          GET {item.discount} OFF
        </Text>
        <Box pl="5px">
          <GiSevenPointedStar color="#ba5253" fontSize="10px" />
        </Box>
      </Flex>
      {/* product Image */}
      <Grid justifyItems={"center"} pt=".5rem" pb="1rem">
        <Image src={item.src} alt={item.product_info} w="150px" h="150px" />
      </Grid>
      {/* product details section  */}
      <Box px="5px">
        <Text
          fontSize="10px"
          fontFamily=""
          color="#999"
          textAlign={"left"}
          fontWeight="500"
        >
          {item.brand}
        </Text>
        <Text
          fontSize="13px"
          fontFamily=""
          color="#0b0b0b"
          textAlign={"left"}
          fontWeight="400"
        >
          {item.product_info}
        </Text>
        <Flex py="5px" align="center">
          <Flex
            align="center"
            bg="rgb(227, 235, 218)"
            justify="space-around"
            px="5px"
            py="2px"
            maxWidth="fit-content"
            mr="7px"
          >
            <Text
              fontSize="11px"
              fontFamily=""
              color="#689f38"
              textAlign={"left"}
              fontWeight="400"
            >
              {item.rating}
            </Text>
            <Box pl="5px">
              <GiSevenPointedStar color="#689f38" fontSize="10px" />
            </Box>
          </Flex>
          <Text fontSize="11px" fontFamily="" color="#4a4a4a" fontWeight="400">
            {item.rating_number} Ratings
          </Text>
        </Flex>
        <Flex px="10px" h="22px" border="1px solid #ccc" my="10px">
          <Text
            fontSize="12px"
            fontFamily=""
            color="#666"
            textAlign={"left"}
            fontWeight="500"
            mr="5px"
          >
            {item.weight}
          </Text>
          <Text
            fontSize="12px"
            fontFamily=""
            color="#666"
            textAlign={"left"}
            fontWeight="500"
          >
            {item.price}
          </Text>
        </Flex>
        {/* MRP, Quantity and add to cart section*/}
        <Box bg="#f4f3f2" py="5px" px="5px">
          <Flex align={"center"}>
            <Text
              fontSize="11px"
              fontFamily=""
              color="#666"
              textAlign={"left"}
              fontWeight="400"
              mr="5px"
            >
              MRP{" "}
              <span style={{ textDecoration: "line-through" }}>
                Rs {item.mrp}
              </span>
            </Text>
            <Text
              fontSize="14px"
              fontFamily=""
              color="#231f20"
              textAlign={"left"}
              fontWeight="400"
            >
              Rs-{item.price}
            </Text>
          </Flex>
          <Flex pr="5px">
            <Box mr="5px" _hover={{ color: "#79933b" }}>
              <RiTruckFill color="#888" fontSize="18px" />
            </Box>
            <Text
              fontSize="10px"
              fontFamily=""
              color="#333"
              textAlign={"left"}
              fontWeight="400"
            >
              {item.delievery_day_time}
            </Text>
          </Flex>
          <Stack mb="5px">
            <InputGroup borderColor="#ccc" size="xs">
              <InputLeftAddon
                children="Qty"
                color="#999"
                fontSize="12px"
                bg="#eee"
              />
              <Input type="number" color="#333" fontSize="14px" bg="#fff" />
            </InputGroup>
            <Button
              rightIcon={<IoMdCart fontSize="15px" />}
              fontSize="14px"
              colorScheme="teal"
              variant="solid"
              size="xs"
              onClick={() => AddToCart(item)}
            >
              Add To cart
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Product_card;
