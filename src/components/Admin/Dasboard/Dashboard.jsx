import { Box, Grid, Heading, HStack, Progress, Stack, Text } from '@chakra-ui/react'
import {RiArrowUpLine,RiArrowDownLine} from 'react-icons/ri'
import React from 'react'
import Sidebar from '../Sidebar'
import { DoughnutChart, LineChart } from './Chart'


const Databox=({title,qty,qtyPercentage,profit})=>(
    <Box p={8} w={["full","20%"]} boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'} borderRadius={'lg'}>
    <Text children={title} />
    <HStack spacing={"6"}>
    <Text fontSize={"2xl"} fontWeight="bold" children={`${qty}`} />
    <Text children={`${qtyPercentage}%`} />
    {profit?<RiArrowUpLine color="green" />:
    <RiArrowDownLine color="red" />
    }
    </HStack>
    <Text opacity={0.6} children={`Since Last Month`} />
    </Box>
)

const Bar=({title,value,profit})=>(
    <Box py="4" px={["0","20"]}>
    <Heading size="sm" children={title} mb="2" />
    <HStack w="full" alignItems={"center"}>
    <Text children={profit ? "0%":`-${value}%`} />
    <Progress w="full" value={profit ? value : 0} colorScheme="purple" /> 
    <Text children={`${value > 100 ? value :100}%`} />
    </HStack>
    </Box>
)

const Dashboard = () => {
    const data=[
        {title:"Views",qty:123,qtyPercentage:33, profit:true},
        {title:"Users",qty:55,qtyPercentage:55,profit:true},
        {title:"Subscription",qty:22,qtyPercentage:40,profit:false},
        ]
  return (
    <Grid minH={"100vh"} templateColumns={['1fr','5fr 1fr']}>
        <Box boxSize={"border-box"} py="16" px={["4","0"]}>
        <Text textAlign={"center"} opacity={0.5} children={`Last change was on ${String(new Date()).split('G')[0]}`}/>

<Heading children="Dashboard" ml={["0","16"]} mb="16" textAlign={["center","left"]} />
<Stack direction={["column","row"]} minH="24" justifyContent={"space-evenly"}>
{data.map((item,index)=>(   
<Databox key={index} title={item.title} qty={item.qty} qtyPercentage={item.qtyPercentage} profit={item.profit} />
))}
</Stack>
<Box m={["0","16"]} borderRadius="lg" p={["0","16"]} mt={["4","16"]} boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}>
<Heading textAlign={["center","left"]} size="md" children="Views Graph" pt={["8","0"]} ml={['0','16']} />
<LineChart/>
</Box>
<Grid templateColumns={["1fr","2fr 1fr"]}>
<Box p="4">
<Heading textAlign={["center","left"]} children="Progress Bar" size="md" my="8" ml={["0","16"]} />
<Box>
{data.map((item,index)=>(   
    <Bar key={index} profit={item.profit} title={item.title} value={item.qtyPercentage} />
    
))}
</Box>
</Box>

<Box p={["0","16"]} boxSizing="border-box" py="4">
<Heading textAlign={"center"} size="md" mb="4" children="Users" />
<DoughnutChart />
</Box>
</Grid>
        </Box>
        <Sidebar />
    </Grid>
  )
}

export default Dashboard
