import { Avatar, Button, Container, Heading, HStack, Image, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import ImageCourse from '../../assets/images/3776369.jpg';
import { fileUploadCss } from '../Auth/Register';

const Profile = () => {
    const user={
        name:"Nameera",
        email:"namirafatima1991@gmail.com",
        createdAt:String(new Date().toISOString()),
        role:'user',
        subscription:{
            status:'active'
        },
        playlist:[{
            course:"jiara",
            poster:ImageCourse

        }
    ]}
    const removeFromPlaylistHandler =id =>{
        console.log(id)
    }
const {isOpen,onClose,onOpen}=useDisclosure()
const changeImageHandler=(e,image)=>{
    e.preventDefault();
    console.log(image);
    
}

  return (
    <Container minH={'95vh'} maxW="container.lg" py="8">
    <Heading children="Profile" m="8" textTransform={"uppercase"} />
    <Stack justifyContent={"flex-start"} direction={["column","row"]} alignItems={"center"} spacing={["8","6"]} padding="8">
<VStack>
    <Avatar boxSize={'48'}/>
    <Button onClick={onOpen} colorScheme={'yellow'} variant={'ghost'}>
Change Photo
    </Button>
</VStack>
<VStack spacing={"4"} alignItems={["center","flex-start"]}>
<HStack>
    <Text children="Name" fontWeight={'bold'}/>
    <Text children={user.name}/>
</HStack>
<HStack>
    <Text children="Email" fontWeight={'bold'}/>
    <Text children={user.email}/>
</HStack>
<HStack>
    <Text children="CreatedAt" fontWeight={'bold'}/>
    <Text children={user.createdAt.split("T")[0]}/>
</HStack>
{user.role !=='admin' && <HStack>
    <Text children="Subscription" fontWeight={'bold'}/>
    {user.subscription.status === "active" ? (
        <Button color={"yellow.400"} variant={"unstyled"}>Cancel Subscription</Button>
        ):(
            <Link to="/subscribe"><Button colorScheme={"yellow"}>Subscribe</Button></Link>
        )
    }
    </HStack>
    }
    <Stack direction={["column","row"]} alignItems={"center"}>
<Link to="/updateprofile">
<Button>Update Password</Button>
</Link>
<Link to="/updateprofile">
<Button>Change Password</Button>
</Link>
</Stack>
</VStack>
    </Stack>
    <Heading children="Playlist" my="8" size="md"/>
    {user.playlist.length > 0 && (
<Stack>
<Stack direction={["column","row"]} alignItems={'center'} flexWrap="wrap" p="4">
    {
        user.playlist.map((element)=>(
            <VStack w="48" m="2" key={element.course}>
            <Image boxSize={"full"} objectFit="contain" src={element.poster} />
            <HStack>
            <Link to={`/course/${element.course}`}>
            <Button variant={"ghost"} colorScheme='yellow'>Watch Now</Button>
            </Link>
            <Button variant={"ghost"} onClick={()=>removeFromPlaylistHandler(element.course)}>
                <RiDeleteBin7Fill/>
            </Button>
            </HStack>
            </VStack>
        ))
    }
</Stack>
<ChangePhoto isOpen={isOpen} onClose={onClose} changeImageHandler={changeImageHandler} />
</Stack>
    )}

    </Container>
  )
}

export default Profile;

function ChangePhoto({isOpen,onClose,changeImageHandler}){
    const [image,setImage]=useState("");
    const [imagePrev,setImagePrev]=useState("");
    const changeImage=e=>{        
        const file=e.target.files[0];
        
        const reader =new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend =()=>{
            setImagePrev(reader.result);
            setImage(file);
        };
    }
    const closeHandler=()=>{
        onClose();
        setImagePrev("");
        setImage("");
    }
    return(
        <Modal isOpen={isOpen} onClose={closeHandler}>
            <ModalOverlay backdropFilter={'blur(10px)'}/>
            <ModalContent>
            <ModalHeader children={"Change Photo"} />
            <ModalBody>
<Container>
    <form onSubmit={(e)=>changeImageHandler(e,image)}>
        <VStack spacing={'8'}>
            {imagePrev && <Avatar src={imagePrev} boxSize={"48"}/> }
            <Input type={'file'}  css={{'&:file-selector-button':fileUploadCss}} onChange={changeImage}/>
            <Button w="full" colorScheme={'yellow'} type="submit">Change</Button>
            </VStack>
    </form>
</Container>
            </ModalBody>
<ModalFooter>
    <Button mr="3" onClick={closeHandler}>Cancel</Button>
</ModalFooter>
            </ModalContent>
        </Modal>
    )
}
