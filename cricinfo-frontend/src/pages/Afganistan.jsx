import React from 'react'
import { international } from '../script/series'
import { CurrentMatch } from './CurrentMatch'
import {Box,
    Center,
    Image,
    Flex,
    Text, useColorModeValue,
    Divider,} from "@chakra-ui/react"

export const Afganistan = () => {
  return (
    <Box>
       {international.map(e=>{
        console.log(e)
        return(
            <>
            <Text>{e.name}</Text>
            </>
        )
       })}
    <Flex>
        <Box>
      <SingleTeam international={international}/>
      </Box>
      <Box>
        {/* <CurrentMatch/> */}
        </Box>
      </Flex>
        </Box>
  )
}
const SingleTeam=(props)=>{
    const {international}=props
    // console.log(international)
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
      {international.matchList?.map(e=>{
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
