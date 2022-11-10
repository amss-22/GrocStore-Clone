import React from "react";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { GiSevenPointedStar } from "react-icons/gi";
// import { GiSevenPointedStar } from "react-icons/gi";

const Product_card = () => {
  return (
    <Box border="1px solid #f2f2f2" h="400px" p="5px">
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
          GET 24 OFF
        </Text>
        <Box pl="5px">
          <GiSevenPointedStar color="#ba5253" fontSize="10px" />
        </Box>
      </Flex>
      {/* product Image */}
      <Grid justifyItems={"center"} pt=".5rem" pb="1rem">
        <Image
          src="https://www.bigbasket.com/media/uploads/p/s/10000031_21-fresho-banana-yelakki.jpg"
          alt="banana"
          w="150px"
          h="150px"
        />
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
          fresho
        </Text>
        <Text
          fontSize="13px"
          fontFamily=""
          color="#0b0b0b"
          textAlign={"left"}
          fontWeight="400"
        >
          Tender Coconut Water - No Added Sugar, Flavours
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
              4.2
            </Text>
            <Box pl="5px">
              <GiSevenPointedStar color="#689f38" fontSize="10px" />
            </Box>
          </Flex>
          <Text fontSize="11px" fontFamily="" color="#4a4a4a" fontWeight="400">
            10000 Ratings
          </Text>
        </Flex>
        <Flex px="10px" h="22px" border="1px solid #ccc">
          <Text
            fontSize="12px"
            fontFamily=""
            color="#666"
            textAlign={"left"}
            fontWeight="500"
            mr="5px"
          >
            500 g -
          </Text>
          <Text
            fontSize="12px"
            fontFamily=""
            color="#666"
            textAlign={"left"}
            fontWeight="500"
          >
           Rs-500
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Product_card;
