import React from 'react'
import {Box,Text,Center,useColorModeValue,Image,Button} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"

export const AskQue = () => {
  return (
    <Center py={6}>
    <Box
      w={'300px'}
      // w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      // boxShadow={'2xl'}
      border="1px solid grey"
      rounded={'md'}
      overflow={'hidden'}>
       <Box >
        <Image margin={"auto"} boxSize={"200"} src="https://wassets.hscicdn.com/static/images/nlp-logo.svg" />
      <Text marginBottom={"5"} fontWeight="semibold">Which spinner has taken the most wickets in an IPL season?</Text>
      <Button marginBottom={"5"} colorScheme='teal' leftIcon={<SearchIcon/>}  
            rounded={'full'} variant='outline'>
    Ask For Question
  </Button>
      </Box> 

      </Box>
      </Center>
  )
}
