import { Box, Heading, Input, Flex, Spacer, Text, Grid, Button } from '@chakra-ui/react';
import React from 'react';
import {
    FormControl,
    FormLabel,
  } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';




export const Checkout = () => {
  
  const toast=useToast()
  let total = JSON.parse(localStorage.getItem("total"));

  const handleSub = ()=>{
    toast({
      title: "Payment SuccessFully",
      position: "top-center",
      status: "success",
      duration: 2000, 
      isClosable: true,
    });
  }

  return (
    <Flex>
    <Box m={10}  w={"70%"} bg="gray.200" h={"auto"} border="2px solid blue" >
        <Heading m={5} color={"gray.400"} >
            Delivery
        </Heading>
        <FormControl>
        <Box m="10px" >
        <FormLabel m={6}>Personal Details</FormLabel>
        <Flex gap={6} m={6}>
        <Box>
        <FormControl>Enter First Name</FormControl>   
        <Input type='text' />
        </Box>
        <Box>
        <FormControl>Enter Last Name</FormControl>   
        <Input type='text' />
        </Box>
        <Box>
        <FormControl>Enter Mobile Number</FormControl>   
        <Input type='number' />
        </Box>
        </Flex>
        </Box>
        <Box m="10px" >
        <FormLabel m={6} >Address Details</FormLabel>
        <Grid gap={6} m={6} templateColumns='repeat(3, 1fr)'>
        <Box>
        <FormControl>House no.</FormControl>   
        <Input type='number' />
        </Box>
        <Box>
        <FormControl>Enter Apartment name</FormControl>   
        <Input type='text' />
        </Box>
        <Box >
        <FormControl>Enter street details</FormControl>   
        <Input type='text' />
        </Box>
        <Box >
        <FormControl>Enter Landmark</FormControl>   
        <Input type='number' />
        </Box>
        <Box >
        <FormControl>Enter City Name</FormControl>   
        <Input type='text' />
        </Box>
        <Box mb={6}>
        <FormControl>Enter Pincode</FormControl>   
        <Input type='number' />
        </Box>
        </Grid>
        </Box>
 <Link to="/"> <Button m={6} bg={"green.500"} alignItem="center" ml={80} onClick={handleSub} >GO TO PAYMENT</Button> </Link>
</FormControl>
    </Box>
    <Box m="10" w={"28%"} bg="gray.400" h={200}>
            <Heading fontSize='xl' m={4} >Order Summary</Heading>
            <Box>
                <Flex m={3}>
                <Text >Basket Value</Text>
                <Spacer />
                <Text>Rs {total}</Text>
                </Flex>
                <Flex m={3} >
                <Text>Delivery Charges</Text>
                <Spacer />
                <Text color="pink.600" fontSize={"lg"} >Free</Text>
                </Flex>
                <Flex m={3} >
                <Text color="black.600" fontSize={"xl"}>Total Amount</Text>
                <Spacer />
                <Text color="black.600" fontSize={"xl"} >{total}</Text>
                </Flex>
            </Box>
           </Box>
    </Flex>
  )
}
