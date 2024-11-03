import React from 'react';
import {Heading, Stack, VStack,Text,Button,Image,Box, HStack} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner.png';
import {CgGoogle,CgYoutube} from 'react-icons/cg';
import {SiCoursera,SiUdemy} from 'react-icons/si';
import {DiAws} from 'react-icons/di';
import introVideo from '../../assets/videos/intro.mp4'

const Home = () => {
  return (
  <section className='home'>
<div className='container'>
<Stack direction={["column","row"]} height="100%" justifyContent={["center","space-between"]} alignItems="center"  spacing={['16','56']}>
<VStack width={"full"} alignItems={['center','flex-end']}>
    <Heading children="Learn From The Experts" size={'2xl'} />
        <Text children="Find Courses"/>
          <Link to="course">
          <Button size={"lg"} colorScheme="yellow">Enroll Now</Button>
          </Link>
</VStack>
<VStack width={"full"} alignItems={['center','flex-end']}>
<Image className='banner' boxSize={'md'} src={banner} objectFit={'cover'}/>
</VStack>
</Stack>
</div>
<Box  padding={'8'} bg="blackAlpha.800">
<Heading textAlign={'center'} fontFamily="body" color={'yellow.400'} children="Our Brand" />
  <HStack className='brands' justifyContent={'space-evenly'} marginTop="4">
    <CgGoogle/>
    <CgYoutube/>
    <SiCoursera/>
    <SiUdemy/>
    <DiAws/>
  </HStack>
</Box>

<div className="containerb">
  <video autoPlay={true} controls disablePictureInPicture disableRemotePlayback src={introVideo} controlsList="nodownload nofullscreen noremoteplayback"></video>
</div>

  </section>
  )
}

export default Home;
