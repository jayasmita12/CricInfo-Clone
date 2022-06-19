

import React from 'react'
import {newsHeadline} from "../script/series"
import "../css/Series.css"
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
  import "../css/Series.css"
import { News } from './News';
import { news } from '../script/news';

export const NewsHeadline = () => {
  return (
    <Center py={6}>
    <Box
      maxW={'300px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      // border="1px solid grey"
      rounded={'md'}
      overflow={'hidden'}>
      <Text margin={"4"} fontWeight="semibold">Quick Link</Text>
      <Divider />

      {newsHeadline.map(e=>{
        return (
            <List key={e.name} >
                <ListItem className="seriesList" >
                    <ListIcon as={MdKeyboardArrowRight} boxSize="5" color="#246ac6"/>
                    {e.name}
                </ListItem>
            </List>
        )
      })}


      <Image src="https://tpc.googlesyndication.com/simgad/5163876710482171922?"/>
      <Center py={6} >
    <Box
      maxW={'1100px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}>
          <Heading textAlign={"initial"} padding={"5"}>Latest News</Heading>
          <Divider/>
      {news.map(e=>{
          return(
                <Box>

                    
                {/* //<Flex margin={"5"} gap={"5"}> */}
                    <Box>
                        <Image borderRadius={"15"} transform="scale(1.0)"  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                    cursor: "pointer",
                  }} src={e.image}/>
                    </Box>
                    <Box>
                        <Heading fontSize={"2xl"} textAlign={"initial"}>{e.heading}</Heading>
                        <Text textAlign={"initial"}>{e.text}</Text>
                    </Box>
                {/* //</Flex> */}
                
                <Divider/>
                </Box>
            )
        })}

        </Box>
        </Center>
    </Box>
    <Box>
    </Box>
  </Center>
  )
}
