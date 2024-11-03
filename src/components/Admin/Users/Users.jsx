import { Box, Button, Grid, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri';

const Users = () => {
  const users=[{
_id:"fnknfk",
name:"Nameera",
role:"Admin",
susbcription:{
  status:"active"
},
email:"namirafatima1991@gmail.com"
  }];
  const updateHandler=(userId)=>{
    console.log(userId);
  }
  const deleteButtonHandler=(userId)=>{
    console.log(userId);
    
  }
  return (
    <Grid minH={"100vh"} templateColumns={['1fr','5fr 1fr']}>
    <Box p={["0","16"]} overflowX={"auto"}>
    <Heading textTransform={"uppercase"} children="All Users" my="16" textAlign={["center","left"]} />
    <TableContainer w={["100vw","full"]}>
      <Table variant={"simple"} size="lg">
        <TableCaption>All available users</TableCaption>
        <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>Role</Th>
        <Th>Subscription</Th>
        <Th>Action</Th>
      </Tr>
        </Thead>
        <Tbody>
          {users.map((item,index)=>(
            <Row key={index} updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} item={item} />
          ))
          }
        </Tbody>
      </Table>
    </TableContainer>
    </Box>
    <Sidebar />
</Grid>
  )
}

export default Users
 
function Row({item,updateHandler,deleteButtonHandler})
{
  
  
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.susbcription.status==='active' ?  'Active':'Not Active'}</Td>
      <Td isNumeric>  
      <HStack justifyContent={"flex-end"}>
      <Button onClick={()=>updateHandler(item._id)} variant={"outline"} color="purple.500">Change Role</Button>
      <Button onClick={()=>deleteButtonHandler(item._id)}  color="purple.600"><RiDeleteBin7Fill/></Button>
      </HStack>
      
      </Td>
    </Tr>
  )
}