import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React,{useState} from 'react'
import introVideo from '../../assets/videos/intro.mp4'

const CoursesDetails = () => {
  const lectureTitle="Lecture";
  const [lectureNumber,setlectureNumber]=useState(0);
  const lectures=[
    {
    _id:"hhihi1",
    title:"sample1",
    description:"sample descmaionfinainiav vvknsv1",
    video:{
      url:"cionaonvia"
    },
  },
    {
    _id:"hhihi2",
    title:"sample2",
    description:"sample descmaionfinainiav vvknsv2",
    video:{
      url:"cionaonvia"
    },
  },
    {
    _id:"hhihi3",
    title:"sample3",
    description:"sample descmaionfinainiav vvknsv3",
    video:{
      url:"cionaonvia"
    },
  }

];
  return (
    <Grid minH={"90vh"} templateColumns={['1fr','3fr 1fr']}>

<Box>
<video width={"100%"} autoPlay={true} controls disablePictureInPicture disableRemotePlayback src={introVideo} controlsList="nodownload nofullscreen noremoteplayback"></video>
<Heading children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`} m="4" />
<Heading children="Description" m="4" />
<Text m="4" children={lectures[lectureNumber].description} />
</Box>
<VStack>
{
  lectures.map((item,index)=>(
    <button onClick={()=>setlectureNumber(index)} key={index} style={{width:"100%",padding:"1rem",textAlign:"center",padding:"1rem",margin:0,borderBottom:"1px solid rgba(0,0,0,0,0.2)"}}>
      <Text noOfLines={1}>#{index+1} {item.title}</Text>
    </button>
  ))
}
</VStack>

    </Grid>
  )
}

export default CoursesDetails
