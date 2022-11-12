import React, { useEffect, useState } from "react";
import { Box, Grid, Text, Flex, Select, Option } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/productReducer/action";
import Product_card from "./Product_card";
import { RiTruckFill } from "react-icons/ri";
import { useLocation, useSearchParams } from "react-router-dom";

const Product_right_grid = ({temp}) => {
  console.log("Temp", temp)
  const [selectVal, setSelectVal] = useState("");
  const [quantity, setQuantity] = useState(1);
  const product_data = useSelector((store) => store.productdata.products);
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const price = searchParam.getAll("price");
    let queryParams = {
      params: {
        price: price,
      },
    };
    dispatch(getProduct(queryParams));
  }, [location.search]);

  // console.log("filterd Data", product_data);
  const onChangeHandle = (e) => {
    setSelectVal(e.target.value);
  };
  return (
    <Box pl={{ lg: "15px" }}>
      {/* Product category title and number of product*/}
      <Flex mb="2rem">
        <Text
          fontSize={{ base: "16px", md: "22px", lg: "20px" }}
          fontFamily=""
          color="#333"
          textAlign={"left"}
          fontWeight="400"
        >
          Fruits & Vegetables (504)
        </Text>
        <Box ml="auto">
          <Select color="#666" size="sm" onChange={onChangeHandle}>
            <option value="pop">Popularity</option>
            <option value="asc">price- Low to High</option>
            <option value="desc">price- High to Low</option>
            <option value="alpha">Alphabetically</option>
            <option value="rating">Sort by rating</option>
          </Select>
        </Box>
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
      <Box borderBottom="1px solid #999" mt="-1rem" mb="1.5rem">
        <Box w="130px" h="1.5px" bg="#84c225" />
      </Box>
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        rowGap="2rem"
      >
        {temp
          .sort((a, b) => {
            if (selectVal === "asc") {
              return Number(a.price) - Number(b.price);
            }
            if (selectVal === "desc") {
              return Number(b.price) - Number(a.price);
            }
            if (selectVal === "alpha") {
              return (
                a.product_info.charCodeAt(0) - b.product_info.charCodeAt(0)
              );
            }
            if (selectVal === "rating") {
              return Number(b.rating) - Number(a.rating);
            }
          })
          .map((item, id) => {
            return (
              <Product_card
                item={item}
                id={id}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            );
          })}
      </Grid>
    </Box>
  );
};

export default Product_right_grid;
