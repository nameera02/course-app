import { Button, VStack } from '@chakra-ui/react'
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const location=useLocation();
    const adminLinks=[
    {text:"Dashboard",link:"dashboard",icon:RiDashboardFill,active:location.pathname==="/admin/dashboard"},
    {text:"Create Course",link:"createcourse",icon:RiAddCircleFill,active:location.pathname==="/admin/createcourse"},
    {text:"Courses",link:"courses",icon:RiEyeFill,active:location.pathname==="/admin/courses"},
    {text:"Users",link:"users",icon:RiUser3Fill,active:location.pathname==="/admin/users"},
    ]
  return (
    <VStack spacing={"8"} p="16" boxShadow={"-2px 0 10px rgba(107,70,193.0,0.5)"}>
    {adminLinks.map((item,index)=>(
        <LinkBtn key={index} link={item.link} Icon={item.icon} text={item.text} active={item.active}/>
    ))}
            </VStack>
        )
}

export default Sidebar;

function LinkBtn({link,Icon,text,active}){
return(
    <Link to={`/admin/${link}`}>
    <Button cursor={"pointer"} fontSize={"large"} variant={"ghost"} colorScheme={active?"purple":''}>
        <Icon style={{margin:'4px'}} />{text}
    </Button>
    </Link>
)
}