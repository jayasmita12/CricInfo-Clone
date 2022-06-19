import React from 'react'
import {Box,Center,useColorModeValue,Heading,Text,Flex,Image, Divider} from "@chakra-ui/react"
import { news } from '../script/news' 
import { NewsHeadline } from './NewsHeadline'

export const News = () => {
  return (
    <Center py={6} >
      <Flex gap="20">
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

                    
                <Flex margin={"5"} gap={"5"}>
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
                </Flex>
                
                <Divider/>
                </Box>
            )
        })}
        </Box>
        <Box>
        <NewsHeadline/>
        </Box>
        </Flex>
        </Center>
  )
}
