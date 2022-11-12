import { Box, Heading, Input, Flex, Spacer, Text, Grid, Button } from '@chakra-ui/react'
import React from 'react'
import {
    FormControl,
    FormLabel,
  } from '@chakra-ui/react'

export const Checkout = () => {
  return (
    <Flex>
    <Box m={10}  w={"70%"} bg="gray.300" h={"auto"} >
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
  <Button m={6} bg={"green.500"} alignItem="center" ml={80} >GO TO PAYMENT</Button>
</FormControl>
    </Box>
    <Box m="10" w={"28%"} bg="gray.400" h={200}>
            <Heading fontSize='xl' m={4} >Order Summary</Heading>
            <Box>
                <Flex m={3}>
                <Text >Basket Value</Text>
                <Spacer />
                <Text>Rs 609</Text>
                </Flex>
                <Flex m={3} >
                <Text>Delivery Charges</Text>
                <Spacer />
                <Text color="pink.600" fontSize={"lg"} >Free</Text>
                </Flex>
                <Flex m={3} >
                <Text color="black.600" fontSize={"xl"}>Total Amount</Text>
                <Spacer />
                <Text color="black.600" fontSize={"xl"} >609</Text>
                </Flex>
            </Box>
           </Box>
    </Flex>
  )
}
