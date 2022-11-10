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

  console.log("product_data", product_data);
  return (
    <Box>
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
        rowGap="2rem"
        pl={{ md: "15px" }}
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
