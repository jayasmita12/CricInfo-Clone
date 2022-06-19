import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import { AskQue } from '../pages/AskQue';
import { CurrentMatch } from '../pages/CurrentMatch';
import { EspnApp } from '../pages/EspnApp';
import Footer from '../pages/Footer';
import { KeySeries } from '../pages/KeySeries';
import { NewsHeadline } from '../pages/NewsHeadline';
import { QuickLink } from '../pages/QuickLink';
import { Link } from 'react-router-dom';

// import {IoIosArrowForward} from "react-icons/io"

export const Home = () => {
  return (
    <>
    
    <Flex marginLeft={"100"}>
      <Box>
        <a href="https://www.espncricinfo.com/ask">
        <AskQue/>
        </a>
        <KeySeries />
        <QuickLink />
        {/* <EspnApp/> */}
      </Box>

      <Box>
        <CurrentMatch/>
      </Box>

      <Box>
        <NewsHeadline/>
      </Box>
    </Flex>
    <Footer/>
    </>
  );
}