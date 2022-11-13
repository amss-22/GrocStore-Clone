import React from "react";
import { Box, Text } from "@chakra-ui/react";

const BorderBottom = ({ category }) => {
  return (
    <Box>
      <Box mb="1.3rem" align={"center"}>
        <Text
          fontSize={{ base: "10px", lg: "16px" }}
          fontWeight="400"
          fontFamily=""
          color="#58595b"
          textAlign="left"
        >
         {category}
        </Text>
      </Box>
      <Box borderBottom="1px solid #999" mt="-1rem" mb="1rem">
        <Box w="80px" h=".5px" bg="#84c225" />
      </Box>
    </Box>
  );
};

export default BorderBottom;
