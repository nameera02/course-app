import { Container,Heading, Input,VStack,Button } from '@chakra-ui/react'
import React,{useState} from 'react'
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password,setPassword]=useState("");
    const params =useParams();
    console.log(params);
    
  return (
    <Container h={'95vh'}>
        <form>
            <Heading children="Reset Password" my="16" textTransform={'uppercase'} textAlign={['center','left']} />
            <VStack>
            <Input required value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter Your Password" type={"password"} focusBorderColor="yellow.500" />
            <Button type='submit' w={'full'} colorScheme="yellow">Upate Password</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ResetPassword;
