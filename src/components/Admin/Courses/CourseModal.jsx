import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { fileUploadCss } from '../../Auth/Register';

const CourseModel = ({isOpen,onClose,id,deleteButttonHandler,addLectureHandler,courseTitle,lectures=[1,2,3,4,5,6,7,8,9]}) => {
  const [title,setTitle]=useState("");
  const [video,setVideo]=useState("");
  const [videoprev,setVideoPrev]=useState("");
  const [description,setDescription]=useState("");
  
  const changeVideoHandler=e=>{
    const file=e.target.files[0];
    console.log(file);
    const reader =new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend =()=>{
      setVideoPrev(reader.result);
      setVideo(file);
    };
  }

  const handleClose=()=>{
    setTitle("");
    setDescription("");
    setVideo("");
    setVideoPrev("");
    onClose();
  }
  return (
    <Modal isOpen={isOpen} size="full" onClose={handleClose}
     >
<ModalOverlay/>
<ModalContent>
  <ModalHeader>{courseTitle}</ModalHeader>
  <ModalCloseButton onClick={onClose} />
  <ModalBody p="16">
<Grid templateColumns={["1fr","3fr 1fr"]}>
<Box px={["0","16"]}>
<Box my="5">
<Heading children={courseTitle} />
<Heading children={`#${id}`} size="sm" opacity={0.4} />
</Box>
<Heading children={"Lectures"} size={"lg"} /> 
{lectures.map((item)=>(
<VideoCard key={item} title="Node Js Intro" description="This is a introduction of node js where you will know the basic of node js" num={1} lectureId="uiuuu" courseId={id} deleteButttonHandler={deleteButttonHandler} />
))}
</Box>
<Box>
  <form onSubmit={e=>addLectureHandler(e,id,title,description,video)}>
    <VStack spacing={"4"}>
    <Heading children="Add Lecture" size={"md"} />
    <Input focusBorderColor="purple.300" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
    <Input focusBorderColor="purple.300" placeholder="Description" value={title} onChange={(e)=>setDescription(e.target.value)} />
    <Input required id="chooseAvatar" accept="video/mp4" type={"file"} focusBorderColor="purple.300"
        css={{'&::file-selector-button':{...fileUploadCss,
          color:'purple'
        }}}
         onChange={changeVideoHandler} />
         {videoprev && (
          <video controlsList='nodownload' controls src={videoprev}></video>
         )}
         <Button w="full" colorScheme={'purple'} type="submit">Upload</Button>
    </VStack>
  </form>
</Box>
</Grid>
  </ModalBody>
  <ModalFooter>
    <Button onClick={handleClose}>Close</Button>
  </ModalFooter>
</ModalContent>
    </Modal>
  )
}

export default CourseModel

function VideoCard({title,description,num,lectureId,courseId,deleteButttonHandler}){
  return <Stack direction={["column","row"]} justifyContent={["flex-start","space-between"]} my="8" borderRadius={"lg"} boxShadow={"0 0 10px rgba(107,70,193,0.5)"} p={["4","8"]}>
    <Box><Heading size="sm" children={`#${num} ${title}`} />
    <Text children={description} />
    </Box>
    <Button color={"purple.600"} onClick={()=> deleteButttonHandler(courseId,lectureId)}>
    <RiDeleteBin7Fill/>
    </Button>
  </Stack>
}
