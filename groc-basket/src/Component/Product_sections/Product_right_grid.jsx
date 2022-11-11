import React, { useEffect } from "react";
import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/productReducer/action";
import Product_card from "./Product_card";
import { RiTruckFill } from "react-icons/ri";

const Product_right_grid = () => {
  const product_data = useSelector((store) => store.productdata.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  console.log("product_data", product_data);
  return (
    <Box pl={{ md: "15px" }}>
      {/* Product category title and number of product*/}
      <Flex mb="2rem">
        <Text
          fontSize={{ base: "16px", lg: "20px" }}
          fontFamily=""
          color="#333"
          textAlign={"left"}
          fontWeight="400"
        >
          Fruits & Vegetables (504)
        </Text>
        <Box ml="auto">Sorting here</Box>
      </Flex>
      <Flex mb="1.3rem" align={"center"} px="15px">
        <Box mr="5px">
          <RiTruckFill color="#84c225" fontSize="18px" />
        </Box>
        <Text
          fontSize={{ base: "10px", lg: "12px" }}
          fontWeight="600"
          fontFamily=""
          color="#58595b"
          letterSpacing={1}
        >
          All Products
        </Text>
      </Flex>
      <Box borderBottom="1px solid #999" mt="-1rem" mb="2rem">
        <Box w="130px" h="1.5px" bg="#84c225" />
      </Box>
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
        rowGap="2rem"
      >
        {product_data.map(
          ({
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
              <Product_card
                discount={discount}
                mrp={mrp}
                brand={brand}
                src={src}
                product_info={product_info}
                weight={weight}
                rating={rating}
                rating_number={rating_number}
                price={price}
                delievery_day_time={delievery_day_time}
              />
            );
          }
        )}
      </Grid>
    </Box>
  );
};

export default Product_right_grid;
