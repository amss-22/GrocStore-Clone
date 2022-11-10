import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import Product_right_grid from '../Component/Product_sections/Product_right_grid';

const ProductPage = () => {
  return (
    <Box w="75%" m="auto" >
      <Grid gridTemplateColumns=".3fr 1fr" h="100vh" p="15px 10px">
      <Box border="1px solid blue">
        
      </Box>
        <Box border="1px solid gray">
        <Product_right_grid/>  
      </Box>
      </Grid>
    </Box>
  )
}

export default ProductPage;