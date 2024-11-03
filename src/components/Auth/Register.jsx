import { VStack,Container,Button,FormLabel,Heading,Input,Box, Avatar, background } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export const fileUploadCss={
    cursor:"pointer",
    marginLeft:"-5%",
    width:"110%",
    border:"none",
    height:"100%",
    color:"#ECC948",
    backgroundColor:"white"
}

const fileUploadStyle ={
"&::file-selector-button":fileUploadCss
}

const Register = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [ name ,setName]=useState("");
    const [imagePrev,setImagePrev]=useState('');
    const [image,setImage]=useState('');

    const changeImageHandler=e=>{
        const file=e.target.files[0];
        console.log(file);
        const reader =new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend =()=>{
            setImagePrev(reader.result);
            setImage(file);
        };
    }

  return (
    <Container h={'95vh'}>
        <VStack h={`full`} justifyContent="center" spacing={'16'}>
            <Heading textTransform={'uppercase'} children={"Registeration"} />
            <form style={{width:'100%'}}>
                <Box my="4" display={"flex"} justifyContent="center"> 
                <Avatar src={imagePrev} size={'2xl'} />
                </Box>
            <Box my={"4"}>  
            <FormLabel htmlFor="name" children="Name" />
            <Input required id="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your name" type={"text"} focusBorderColor="yellow.500" />
            </Box>
            <Box my={"4"}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input required id="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="example@gmail.com" type={"email"} focusBorderColor="yellow.500" />
            </Box>
            <Box my={"4"}>
            <FormLabel htmlFor="password" children="Password" />
            <Input required id="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter Your Password" type={"password"} focusBorderColor="yellow.500"
            />
            </Box>
            <Box my={"4"}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
            <Input required id="chooseAvatar" accept="image/*" placeholder="Enter Your Password" type={"file"} focusBorderColor="yellow.500"
            css={fileUploadStyle} onChange={changeImageHandler} />
            </Box>
            <Button my="4" colorScheme={'yellow'} type='submit'>Sign Up</Button>
            <Box my="4">Already Sign Up?{' '}
                <Link to="/login"><Button colorScheme={'yellow'} variant="link">Login</Button>{' '}Here</Link>
            </Box>
            </form>
        </VStack>
    </Container>
  )
}

export default Register;
