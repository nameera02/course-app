import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
    const {email,setEmail}=useState("");
    const {message,setMessage}=useState("");
    const {name,setName}=useState("");
  return (
    <Container h="92vh">
<VStack>
    <Heading children="Contact Us" />
    <form style={{width:'100%'}}>
    <Box my={"4"}>
            <FormLabel htmlFor="name" children="Name" />
            <Input required id="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter Your Name" type={"name"} focusBorderColor="yellow.500" />
            </Box>
            <Box my={"4"}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input required id="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="example@gmail.com" type={"email"} focusBorderColor="yellow.500" />
            </Box>
            <Box my={"4"}>
            <FormLabel htmlFor="message" children="Message" />
            <Textarea required id="message" value={message} onChange={e=>setMessage(e.target.value)} placeholder="Enter Your Message" type={"message"} focusBorderColor="yellow.500" />
            </Box>
            <Button my="4" colorScheme={'yellow'} type='submit'>Send Mail</Button>
            <Box my="4">Request new course?{' '}
                <Link to="/request"><Button colorScheme={'yellow'} variant="link">Click</Button>{' '}Here</Link>
            </Box>
            </form>
</VStack>
    </Container>

        );
    }
export default Contact
