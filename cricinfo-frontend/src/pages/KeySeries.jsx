import React from 'react'
// import {keyseriesname} from "../script/series"
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
    ListItem,
  } from '@chakra-ui/react';
  import { MdKeyboardArrowRight, MdSettings } from "react-icons/md"
  import "../css/Series.css"
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getSeries } from '../Redux/Series/action';
import { Link } from 'react-router-dom';



export const KeySeries = () => {
  const dispatch =useDispatch()
  const seriesData = useSelector((store)=>store.seriesstore.series)
  useEffect(()=>{
    getSeries(dispatch)
  },[dispatch])
  // console.log("seriesData",seriesData)
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
      <Text margin={"4"} fontWeight="semibold">Key Series</Text>
      <Divider />

      {seriesData.data?.map(e=>{
        return (
            <List key={e.id}>
              <Link to={`/series/${e.id}`}>
                <ListItem  className="seriesList" >
                    <ListIcon as={MdKeyboardArrowRight} boxSize="5" color="#246ac6"/>
                    {e.name}
                </ListItem>
                </Link>
            </List>
        )
      })}


    </Box>
  </Center>
  )
}
