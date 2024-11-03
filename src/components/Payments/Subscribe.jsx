import { Box, Container,Text, Heading, VStack, Button } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
 <Container h="90vh" p="16">
<Heading children="Welcome" my="8" textAlign={'center'} />
<VStack boxShadow={"lg"} alignItems="stretch" borderRadius={'lg'} spacing="0">
<Box  bg="yellow.400" p={"4"} css={{borderRadius:"8px 8px 0 0"}}>
    <Text color="black" children={`Pro Pack - $15`}></Text>
</Box>
<Box p="4">
    <VStack textAlign={`center`} px="8" mt={`4`} spacing="8">
<Text children={`Join pro pavk and get access to all content`}></Text>
<Heading size="md" children={"$15 Only"} />
</VStack>
<Button my="8" w="full" colorScheme={'yellow'}>Buy Now</Button>
</Box>
<Box bg="blackAlpha.800" p="4" css={{borderRadius:"8px 8px 0 0"}}>
<Heading color="white" size="sm" textTransform={"uppercase"} children={"100% refund at cancellation"} />
<Text fontSize={"xs"} color="white" children={`Terms & Conditions Apply`}></Text>

     </Box>
</VStack>
 </Container>
    

  )
}

export default Subscribe
