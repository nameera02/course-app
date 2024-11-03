import React from 'react';
import {ColorModeSwitcher} from '../../ColorModeSwitcher';
import { Button, Drawer,VStack, DrawerHeader, DrawerOverlay,DrawerContent, DrawerBody, useDisclosure, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';

const BtnLnk= ({url = "/",title="Home",onClose})=>
  (
    <Link to={url} onClick={onClose}>
    <Button variant={'ghost'}>{title}</Button>
    </Link>
  );

const Header = () => {
const {isOpen,onOpen,onClose}=useDisclosure();
const isAuthenticated=true;
const user={
  role:"admin",
}
const logoutHandler=()=>{
  console.log("logout");
  onClose();
}

  return (
    <div>
      <ColorModeSwitcher/>
      <Button zIndex={'overlay'} onClick={onOpen} colorScheme='yellow' width='12' height="12" rounded='full' position={"fixed"} top="6" left='6'>
        <RiMenu5Fill/>
      </Button>
      <Drawer placement='left' isOpen={isOpen} onClose={onClose}>   
        <DrawerOverlay backdropFilter={'blur(2px)'}/>
        <DrawerContent>
        <DrawerHeader borderBottomWidth={'1px'}>
          Course App
        </DrawerHeader>
        <DrawerBody>
<VStack spacing={'4'} alignItems="flex-start">
  <BtnLnk url="/" title="Home" onClose={onClose} />
  <BtnLnk url="/courses" title="Browse All Courses" onClose={onClose} />
  <BtnLnk url="/request" title="Request a Course" onClose={onClose} />
  <BtnLnk url="/contact" title="Contact Us" onClose={onClose} />
  <BtnLnk url="/about" title="About Us" onClose={onClose} />
<HStack justifyContent={"space-evenly"} position="absolute" bottom={"2rem"} width="80%">
{isAuthenticated?(<>
<VStack>
  <HStack>
  <Link to="/profile">
<Button variant={'ghost'} colorScheme='yellow'>Profile</Button>
</Link>
<Button variant={'ghost'} onClick={logoutHandler} >z<RiLogoutBoxLine/>Logout</Button>
  </HStack>
{user && user.role==="admin" && <Link to="/admin/dashboard" onClick={onClose}>
<Button colorScheme={'purple'} variant="ghost">
  <RiDashboardFill style ={{margin:"4px"}}/>
  Dashnboard
</Button>
</Link>

}

</VStack>
</>):(<>
  <Link to="/register" onClick={onClose}>
<Button colorScheme='yellow' >Sign In</Button>
</Link>
<p>OR</p>
<Link to="/login" onClick={onClose}>
<Button colorScheme='yellow'>Sign Up</Button>
</Link>
</>)}
</HStack>
</VStack>
        </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Header


