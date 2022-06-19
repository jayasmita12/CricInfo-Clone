import React from 'react'
import {quicklink} from "../script/series"
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

export const QuickLink = () => {
  return (
    <Center py={6}>
    <Box
      maxW={'300px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      // boxShadow={'2xl'}
      border="1px solid grey"
      rounded={'md'}
      overflow={'hidden'}>
      <Text margin={"4"} fontWeight="semibold">Quick Link</Text>
      <Divider />

      {quicklink.map(e=>{
        return (
            <List key={e.name} >
                <ListItem className="seriesList" >
                    <ListIcon as={MdKeyboardArrowRight} boxSize="5" color="#246ac6"/>
                    {e.name}
                </ListItem>
            </List>
        )
      })}


    </Box>
  </Center>
  )
}
