import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getmatch } from '../Redux/CurrentMatch/action'
import {images} from "../script/series"

import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Center,
    Avatar,
    Divider
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';

export const CurrentMatch = () => {
    const dispatch = useDispatch()
    const currentMatchData = useSelector(store=>store.CurrentMatchstore.match)
    useEffect(()=>{
        getmatch(dispatch)
    },[])
    // console.log("currentMatch",currentMatchData)
    // let currentmatch=currentMatchData.data
    // console.log(images)
  return (
    <>
        {currentMatchData.data?.map(e=>{
          // if(e.story){
            // console.log(e.story.coverImage.id)
            return(
                <Box key={e.id}> 
                <Simple  id={e.id} status={e.status} name={e.name} matchtype={e.matchType} teamInfo={e.teamInfo}  />
                </Box>
            )
          //}
        })}
        
    </>
  )
}



export default function Simple(props) {
    const {id,hline,status,matchtype,teamInfo,name}=props
  return (
    <Box>
      
    <Center py={6}>
      <Box
      marginLeft={"10"}
        maxW={'800px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
          
        <Box
        padding="5"
          h={'650px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
            <Box>
        <Text fontWeight={"bold"} color={"red"}>{matchtype}</Text>
        <Text fontWeight={"bold"}>{name}</Text>
        <Divider/>
        {teamInfo.map(el=>{
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
      </Box>
          <Image
          rounded={"sm"}
          transform="scale(1.0)"  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                    cursor: "pointer",
                  }}
            src={
              "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/319300/319392.6.jpg"
            }
            alt="img"
            layout={'fill'}
          />
        <Heading>{status}</Heading>
        </Box>

        <Flex gap="5">
            <Box>
                <Image transform="scale(1.0)"  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                    cursor: "pointer",
                  }}
                   src={"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_240/lsci/db/PICTURES/CMS/340900/340985.6.jpg"}/>
                {status}
            </Box>
            <Box>
            <Image transform="scale(1.0)"  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                    cursor: "pointer",
                  }} src={"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_240/lsci/db/PICTURES/CMS/340900/340985.6.jpg"}/>
                {status}
            </Box>
            <Box><Image transform="scale(1.0)"  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                    cursor: "pointer",
                  }} src={"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_240/lsci/db/PICTURES/CMS/340900/340985.6.jpg"}/>
                {status}
            </Box>
        </Flex>
      </Box>
    </Center>
    </Box>
  );
}