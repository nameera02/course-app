import React, { useState } from 'react'
import { Button, Container, Heading,Stack,HStack,Image,Input,Text,Link, VStack } from '@chakra-ui/react';
import ImageCourse from '../../assets/images/3776369.jpg';

const Course=({title,view,imageSrc,id,addToPlaylistHandler,creator,description,lectureCount})=>{
  return(
<VStack className='course' alignItems={["center","flex-start"]}>
<Image src={imageSrc} boxSize={60} objectFit={"contain"}/>
<Heading textAlign={['center','left']} maxW="200px" size={'sm'} fontFamily={'sans-serif'} noOfLines={3} children={title} />
<Text noOfLines={2} children={description} />
<HStack>
  <Text fontWeight={'bold'} textTransform="uppercase" children={'Creator'} />
  <Text fontWeight={'bold'} textTransform="uppercase" children={creator} />
</HStack>
<Heading size="xs" children={`Lectures - ${lectureCount}`} textTransform="uppercase" />
<Heading size="xs" children={`Views - ${view}`} textTransform="uppercase" />

<Stack direction={["column","row"]} alignItems="center">
<Link to={`/course/${id}`} >
<Button colorScheme={'yellow'} >Watch Now</Button>
<Button variant={'ghost'} colorScheme={'yellow'} onClick={()=>addToPlaylistHandler(id)}>Add to playlist</Button>
</Link>
</Stack>
</VStack>
);
}
const Courses = () => {
  const [keyword,setKeyword]=useState("");
  const [category,setCategory]=useState("");
  const categories=["Artificial Intelligence","Web Development", "DevOps","Data Structure","SEO","Data Science"];
  const addToPlaylistHandler=()=>{
    console.log("add to playlist");
    
  }
  return (
    <Container minH={"95vh"} maxW="container.lg" paddingY={"8"}>
<Heading children="All Courses" m={"8"} />
<Input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="Search a course..." type={'text'} focusBorderColor="yellow.500" />
<HStack overflowY={"auto"} paddingY="8" css={{"&::-webkit-scrollbar":{display:'none'}}}>
  {categories.map((item,index)=>(
    <Button key={index} onClick={()=>setCategory(item)} minW={'60'}>
  <Text children={item} minW={"60"}/>
  </Button>
  ))}
</HStack>
<Stack direction={["column","row"]} alignItems={["center","flex-start"]} flexWrap="wrap" justifyContent={["flex-start","space-evenly"]}>
<Course title={"Simple Course"} description={"Sample"} views={23} imageSrc={ImageCourse} creator={"Sample"} id={"Sample"} lectureCount={2} addToPlaylistHandler={addToPlaylistHandler} />
</Stack>
    </Container>
  )
}

export default Courses
