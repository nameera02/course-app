import { Container,Heading, Input,VStack,Button } from '@chakra-ui/react'
import React,{useState} from 'react'

const ForgetPassword = () => {
    const [email,setEmail]=useState("");
  return (
    <Container h={'95vh'}>
        <form>
            <Heading children="Forget Password" my="16" textTransform={'uppercase'} textAlign={['center','left']} />
            <VStack>
            <Input required id="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="example@gmail.com" type={"email"} focusBorderColor="yellow.500" />
            <Button type='submit' w={'full'} colorScheme="yellow">Send Reset Link</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ForgetPassword
