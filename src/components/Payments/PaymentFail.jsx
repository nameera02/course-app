import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {  RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentFail = () => {
  return (
    <Container h="90vh" p="16">
<VStack justifyContent={"center"} h="full" spacing={'4'}>
<RiErrorWarningFill size={"5rem"} />
<Heading textTransform={"uppercase"} my="8" textAlign={"cener"} children="Payment Fail" />
     <Link to="/subscribe">
     <Button variant={'ghost'}>Try Again</Button>
     </Link>
</VStack>
    </Container>
  )
}

export default PaymentFail
