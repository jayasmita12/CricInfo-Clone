import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleSeries } from '../Redux/Series/action'
import { CurrentMatch } from './CurrentMatch'
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
import { NewsHeadline } from './NewsHeadline'

export const SeriesDetails = () => {
    const dispatch = useDispatch()
    const singleData = useSelector((store)=>store.seriesstore.singleSeries) 
    // console.log(singleData)
    const {id}=useParams()
    useEffect(()=>{
        if(id){
            dispatch(getSingleSeries(id))
        }
    },[dispatch])
    console.log("id",id)
    console.log("singleData",singleData)
  return (
   <Box>
    <Flex>
        <Box>
      <Demo singleData={singleData}/>
      </Box>
      <Box>
        <CurrentMatch/>
        </Box>
        <Box>
          <NewsHeadline/>
        </Box>
      </Flex>
        </Box>
  )
}

const Demo=(props)=>{
    const {singleData}=props
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
      {singleData.matchList?.map(e=>{
        // const Date=`${e.dateTimeGMT}`.dateGMT()
        // console.log(e.matchList)
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

