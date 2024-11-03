import { Container,Stack, Heading, VStack, Avatar, Text, Button, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4'
import { RiSecurePaymentFill } from 'react-icons/ri';
import { terms } from '../../assets/terms/terms';

const Founder =()=> (
<Stack direction={["column","row"]} spacing={["4","16"]} padding={'8'}>
<VStack>
<Avatar boxSize={["40","48"]} />
<Text children="Co-Founder" opacity={0.7} />
</VStack>
<VStack justifyContent={"center"} alignItems={["center","flex-start"]}>
<Heading children="Nameera Fatima" size={['md','xl']} />
<Text children={"Hello, I'm a Backend Developer and a teacher. Our mission is to provide quality content at reasonable price. "} />
</VStack>
</Stack>    
);

const VidePlayer=()=>(
  <Box>
  <video autoPlay={true} controls disablePictureInPicture disableRemotePlayback src={introVideo} controlsList="nodownload nofullscreen noremoteplayback"></video>
  </Box>
);

const TandC =({termsAndCondition})=>(
  <Box h="sm" p="4" overflowY={'scroll'}>
    <Heading size={"md"} children="Terms & Conditions" textAlign={["center","left"]} my="4" />
    <Box h="sm" p="4">
      <Text fontFamily={"heading"} letterSpacing={"widest"} textAlign={["center","left"]}>{termsAndCondition}</Text>
      <Heading my="4" size={'xs'} children="Refund only applicable for cancellation within 7 days." />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
    <Heading children="About Us" textAlign={['center','left']} />
    <Founder/>
    <Stack m="8" direction={["column","row"]} alignItems="center">
    <Text fontFamily={"cursive"} m="8" textAlign={["center","left"]}>
      We are video streaming platform with some premium courses available only for premium users.
    </Text>
     <Link to="/subscribe">
     <Button variant={"ghost"} colorScheme='yellow'>Checkout Our Plan</Button>
    </Link>
    </Stack>
    <VidePlayer/>
    <TandC termsAndCondition={terms} />
    <HStack my="4" p={"4"}>
     <RiSecurePaymentFill />
     <Heading size={"xs"} textTransform={"uppercase"} children={"Payment is securedby Razorpay"} /> 
    </HStack>
    </Container>
  )
}

export default About
