import React, { useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/productReducer/action";
import Product_card from "./Product_card";

const Product_right_grid = () => {
  const product_data = useSelector((store) => store.productdata.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <Box>
      <Grid gridTemplateColumns="repeat(4, 1fr)" gap={3} pl="15px">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13].map(() => {
          return <Product_card />;
        })}
      </Grid>
    </Box>
  );
};

export default Product_right_grid;  
