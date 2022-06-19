
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Divider,
    Flex,
    Image, Grid,GridItem
} from '@chakra-ui/react';
import { international, IPLTeam } from '../script/series';
import { womensTeam } from '../script/series';
import { Link } from 'react-router-dom';

export const Teams = () => {
    return (
        <Box>
        <Center py={6}>
            <Box
                maxW={'1000px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                border={"1px solid grey"}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Text fontSize={"23"} fontWeight={"bold"} textAlign={"initial"}>POPULAR INTERNATIONAL TEAMS</Text>
                <Divider />
                <Grid templateRows='repeat(5, 1fr)'
                        templateColumns='repeat(3, 1fr)'>
                {international.map(e => {

                    return <Link to={`/teams/${e.name}`}> <Grid h={"100"} border={"1px solid green"} cursor={"pointer"} templateRows='repeat(1, 1fr)'
                    templateColumns='repeat(2, 1fr)' gap="0"> 
                        {/* <Flex> */}
                        <GridItem gap="0">
                            <Image src={e.image} />
                        </GridItem>
                    

                        <GridItem>
                        <Text fontSize={"23"} fontWeight={"bold"}   textAlign={"initial"}>{e.name}</Text>
                        </GridItem>
                        {/* </Flex> */}
                        <Divider orientation='vertical' color={"1px solid"} />
                        
                    </Grid>
                    </Link>
                })}
                </Grid>
            </Box>
        </Center>

        <Center py={6}>
            <Box
                maxW={'1000px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                border={"1px solid grey"}
                rounded={'md'}
                p={5}
                overflow={'hidden'}>
                <Text fontSize={"23"} fontWeight={"bold"} textAlign={"initial"}>POPULAR WOMEN'S TEAMS</Text>
                <Divider />
                <Grid templateRows='repeat(5, 1fr)'
                        templateColumns='repeat(3, 1fr)'>
                {womensTeam.map(e => {

                    return <Grid h={"100"} border={"1px solid green"} cursor={"pointer"} templateRows='repeat(1, 1fr)'
                    templateColumns='repeat(2, 1fr)' gap="0"> 
                        {/* <Flex> */}
                        <GridItem gap="0">
                            <Image src={e.image} />
                        </GridItem>
                    

                        <GridItem>
                        <Text fontSize={"23"} fontWeight={"bold"}   textAlign={"initial"}>{e.name}</Text>
                        </GridItem>
                        {/* </Flex> */}
                        <Divider orientation='vertical' color={"1px solid"} />
                        
                    </Grid>
                })}
                </Grid>
            </Box>
        </Center>
        
        <Center py={6}>
            <Box
                maxW={'1000px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                border={"1px solid grey"}
                rounded={'md'}
                p={5}
                overflow={'hidden'}>
                <Text fontSize={"23"} fontWeight={"bold"} textAlign={"initial"}>IPL 2022 TEAMS</Text>
                <Divider />
                <Grid templateRows='repeat(5, 1fr)'
                        templateColumns='repeat(3, 1fr)'>
                {IPLTeam.map(e => {

                    return <Grid h={"100"} border={"1px solid green"} cursor={"pointer"} templateRows='repeat(1, 1fr)'
                    templateColumns='repeat(2, 1fr)' gap="0"> 
                        {/* <Flex> */}
                        <GridItem gap="0">
                            <Image src={e.image} />
                        </GridItem>
                    

                        <GridItem>
                        <Text fontSize={"23"} fontWeight={"bold"}   textAlign={"initial"}>{e.name}</Text>
                        </GridItem>
                        {/* </Flex> */}
                        <Divider orientation='vertical' color={"1px solid"} />
                        
                    </Grid>
                })}
                </Grid>
            </Box>
        </Center>

        </Box>
    );
}