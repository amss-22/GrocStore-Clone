import React from "react";
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

const Product_card = ({
  discount,
  mrp,
  brand,
  src,
  product_info,
  weight,
  rating,
  rating_number,
  price,
  delievery_day_time,
}) => {
  return (
    <Box
      border="1px solid #f2f2f2"
      h="auto"
      p="5px"
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
          GET {discount} OFF
        </Text>
        <Box pl="5px">
          <GiSevenPointedStar color="#ba5253" fontSize="10px" />
        </Box>
      </Flex>
      {/* product Image */}
      <Grid justifyItems={"center"} pt=".5rem" pb="1rem">
        <Image src={src} alt="banana" w="150px" h="150px" />
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
          {brand}
        </Text>
        <Text
          fontSize="13px"
          fontFamily=""
          color="#0b0b0b"
          textAlign={"left"}
          fontWeight="400"
        >
          {product_info}
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
             {rating}
            </Text>
            <Box pl="5px">
              <GiSevenPointedStar color="#689f38" fontSize="10px" />
            </Box>
          </Flex>
          <Text fontSize="11px" fontFamily="" color="#4a4a4a" fontWeight="400">
            {rating_number} Ratings
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
           {weight}
          </Text>
          <Text
            fontSize="12px"
            fontFamily=""
            color="#666"
            textAlign={"left"}
            fontWeight="500"
          >
            {price}
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
              MRP {" "}
              <span style={{ textDecoration: "line-through" }}>Rs {mrp}</span>
            </Text>
            <Text
              fontSize="14px"
              fontFamily=""
              color="#231f20"
              textAlign={"left"}
              fontWeight="400"
            >
              Rs-{price}
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
             {delievery_day_time}
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
