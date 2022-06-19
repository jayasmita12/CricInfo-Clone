import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleSeries } from '../Redux/Series/action'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Divider,
    VStack,
    ListIcon,
    List,
    ListItem
  } from '@chakra-ui/react';
  import { MdKeyboardArrowRight, MdSettings } from "react-icons/md"
import { getmatch } from '../Redux/CurrentMatch/action';

export const EspnApp = () => {
    const dispatch = useDispatch()
    const currentMatchData = useSelector(store=>store.CurrentMatchstore.match)
    useEffect(()=>{
        dispatch(getmatch)
    },[dispatch])
    console.log("currentMatch",currentMatchData)
  return (
    <>
        <Demo currentMatchData={currentMatchData}/>
    </>
  )
}

const Demo=(props)=>{
    const {currentMatchData}=props
    return(
        <Center py={6} >
    <Box
      maxW={'300px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      // boxShadow={'2xl'}
      border="1px solid grey"
      rounded={'md'}
      overflow={'hidden'}>
      {/* <Text margin={"4"} fontWeight="semibold">Quick Link</Text> */}
      <Divider />
      {currentMatchData?.map(e=>{
        // const Date=`${e.dateTimeGMT}`.dateGMT()
        return (
            <Box py={"1"}>
            <Text fontWeight={"bold"}>{e.date}</Text>
            <Text py={"2"}>{e.matchType},{e.venue}</Text>
            {e.teamInfo.map(el=>{
                return (
                    <Flex marginLeft={"5"} gap={"5"}>
                        <Box>
                            <Image boxSize={"10"} src={el.img} alt="img"/>
                        </Box>
                        <Box >
                           <Text fontWeight={"bold"}>{el.shortname}</Text> 
                        </Box>
                    </Flex>
                )
            })}
            <Text>{e.status}</Text>
            <Divider/>
            </Box>
        )
    })}
      </Box>
      </Center>
    )
}
