import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import Product_right_grid from '../Component/Product_sections/Product_right_grid';

const ProductPage = () => {
  return (
    <Box w={{base:"90%", lg:"75%"}} m="auto" >
      <Grid gridTemplateColumns={{base:"1fr", lg:".25fr 1fr"}} h="100vh" p="15px 10px">
      <Box border={{base:"", md:"", lg:"1px solid #ccc"}} display={{base:"none", lg:"block"}}>
        
      </Box>
        <Box>
        <Product_right_grid/>  
      </Box>
      </Grid>
    </Box>
  )
}

export default ProductPage;