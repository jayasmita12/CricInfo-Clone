import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSeries } from '../Redux/Series/action'
import { CurrentMatch } from './CurrentMatch'
import {Flex,Box} from "@chakra-ui/react"
import { NewsHeadline } from './NewsHeadline'

export const Series = () => {
    const dispatch = useDispatch()
    const seriesData = useSelector((store)=>store.seriesstore.series)
    useEffect(()=>{
        getSeries(dispatch)
    },[])
    console.log("seriesData:",seriesData.data)
  return (
    <Link to="/series">
      <Flex>
        <Box>
          <CurrentMatch/>
        </Box>
        <Box>
          <NewsHeadline/>
        </Box>
      </Flex>
    </Link>
  )
}
