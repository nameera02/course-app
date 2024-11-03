import { Box, Button, Grid, Heading, HStack, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import CourseModal from '../Courses/CourseModal'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import ImageCourse from '../../../assets/images/3776369.jpg';

const Courses = () => {
  const courses=[{
    _id:"fnknfk",
    title:"Node Js",
    category:"Web Development",
    poster:{
      url:ImageCourse,
    },
    createdBy:"Nameera",
    views:555,
    numOfVideos:22
      }];
      const courseHandler=(userId)=>{
        onOpen();
      }
      const deleteButtonHandler=(userId)=>{
        console.log(userId);
      }
    const {isOpen,onClose,onOpen}=useDisclosure()

      const deleteLecButtonHandler=(courseId,lecId)=>{
        console.log(courseId);
        console.log(lecId);
        
      }
    const addLectureHandler=(e,courseId,title,decription,video)=>{
      e.preventDefault();
    }
  return (
    <Grid minH={"100vh"} templateColumns={['1fr','5fr 1fr']}>
    <Box p={["0","8"]} overflowX={"auto"}>
    <Heading textTransform={"uppercase"} children="All Courses" my="16" textAlign={["center","left"]} />
    <TableContainer w={["100vw","full"]}>
      <Table variant={"simple"} size="lg">
        <TableCaption>All available courses</TableCaption>
        <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Post</Th>
        <Th>Title</Th>
        <Th>Category</Th>
        <Th>Creator</Th>
        <Th isNumeric>Views</Th>
        <Th isNumeric>Lectures</Th>
        <Th isNumeric>Action</Th>
      </Tr>
        </Thead>
        <Tbody>
          {courses.map((item,index)=>(
            <Row key={index} courseHandler={courseHandler} deleteButtonHandler={deleteButtonHandler} item={item} />
          ))
          }
        </Tbody>
      </Table>
    </TableContainer>
    <CourseModal id={"iiohio"} courseTitle="NodeJs Course" isOpen={isOpen} onClose={onClose} deleteButtonHandler={deleteLecButtonHandler} addLectureHandler={addLectureHandler} />
    </Box>
    <Sidebar />
</Grid>
  )
}

export default Courses
 
function Row({item,courseHandler,deleteButtonHandler})
{
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
        </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td isNumeric>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.noOfViews}</Td>
      {/* <Td>{item.susbcription.status==='active' ?  'Active':'Not Active'}</Td> */}
      <Td isNumeric>  
      <HStack justifyContent={"flex-end"}>
      <Button onClick={()=>courseHandler(item._id)} variant={"outline"} color="purple.500">View Lectures</Button>
      <Button onClick={()=>deleteButtonHandler(item._id)}  color="purple.600"><RiDeleteBin7Fill/></Button>
      </HStack>
      
      </Td>
    </Tr>
  )
}
