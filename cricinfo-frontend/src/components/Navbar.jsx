import { React } from 'react';
import  {Link} from "react-router-dom"
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Text
} from '@chakra-ui/react';
import { MoonIcon, SearchIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Series } from '../pages/Series';

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <Box bg={useColorModeValue('rgb(3,169,244)', 'blue.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Link to="/"><Image src={"https://wassets.hscicdn.com/static/images/logo.png"}></Image></Link>
          </Box>
          <Flex gap="5" marginLeft={"-10rem"}>
          <Menu>
                <MenuButton  color="lightcyan" fontWeight={"bold"} fontSize={"22px"} >
                  Live Scores
                </MenuButton>
                <MenuList>
                  <MenuItem>Live Scores Home</MenuItem>
                  <MenuItem>Week View</MenuItem>
                  <MenuItem>Month View</MenuItem>
                  <MenuItem>Season View</MenuItem>
                  <MenuItem>InterNational Clander</MenuItem>
                  <MenuItem>Desktop Scoreboard</MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <Link to="/series">
                <MenuButton color="lightcyan" fontWeight={"bold"} fontSize={"22px"} >
                  Series
                </MenuButton>
                </Link>
                <MenuList>
                  <MenuItem>India Vs Sounth Africa</MenuItem>
                  <MenuItem>England Vs NewsLand</MenuItem>
                  <MenuItem>Zimbaw vs Afganistan</MenuItem>
                  <MenuItem>IreLand vs India</MenuItem>
                  <MenuItem>Vitality Blast</MenuItem>
                </MenuList>
               
                {/* <MenuList>
                  <MenuItem>Ranji Trophy</MenuItem>
                </MenuList> */}
              </Menu>

              <Menu>
                <Link to="/teams">
                <MenuButton color="lightcyan" fontWeight={"bold"} fontSize={"22px"} >
                  Teams
                </MenuButton>
                </Link>
                <MenuList>
                <MenuItem>Austrelia</MenuItem>
                  <MenuItem>India</MenuItem>
                  <MenuItem>New Zealand</MenuItem>
                  <MenuItem>Sri Lanka</MenuItem>
                  <MenuItem>Bangladesh</MenuItem>
                </MenuList>
              </Menu>

              <Menu>
              <Link to="/news">
                <MenuButton color="lightcyan" fontWeight={"bold"} fontSize={"22px"} >
                  News
                </MenuButton>
                </Link>
                <MenuList>
                  <MenuItem>News Home</MenuItem>
                  <MenuItem>Covid-19</MenuItem>
                  <MenuItem>Ball-tempering</MenuItem>
                  <MenuItem>Technology in Cricket</MenuItem>
                  <MenuItem>Racisim</MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton color="lightcyan" fontWeight={"bold"} fontSize={"22px"} >
                  Features
                </MenuButton>
                <MenuList>
                  <MenuItem>Features Home</MenuItem>
                  <MenuItem>Writers</MenuItem>
                  <MenuItem>Photo gallaries</MenuItem>
                  <MenuItem>The Cricket Monthly</MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton color="lightcyan" fontWeight={"bold"} fontSize={"22px"} >
                  Videos
                </MenuButton>
                <MenuList>
                  <MenuItem>Videos Home</MenuItem>
                  <MenuItem>T20 Time Out</MenuItem>
                  <MenuItem>Fantasy Pick</MenuItem>
                  <MenuItem>Hann Ya Naa</MenuItem>
                  <MenuItem>NewsRoom</MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton color="lightcyan" fontWeight={"bold"} fontSize={"22px"} >
                  Stars
                </MenuButton>
                <MenuList>
                  <MenuItem>Stars Home</MenuItem>
                  <MenuItem>IPL 2022</MenuItem>
                  <MenuItem>Super Stars</MenuItem>
                  <MenuItem>All Records</MenuItem>
                  <MenuItem>Grounds</MenuItem>
                </MenuList>
              </Menu>
           
          </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>

              

              <Flex gap="2">
                <Image boxSize={"30px"} src={"https://wassets.hscicdn.com/static/images/fantasy-home.png"}></Image>
                <Text color="lightcyan" cursor={"pointer"} fontWeight={"bold"} fontSize={"22px"}>Fantasy</Text>
              </Flex>

              <Menu>
                <MenuButton color="lightcyan" fontWeight={"bold"} fontSize={"22px"} >
                  Editions IN
                </MenuButton>
                <MenuList>
                  <MenuItem>Austrelia</MenuItem>
                  <MenuItem>India</MenuItem>
                  <MenuItem>New Zealand</MenuItem>
                  <MenuItem>Sri Lanka</MenuItem>
                  <MenuItem>Bangladesh</MenuItem>
                </MenuList>
              </Menu>

              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <SearchIcon boxSize="8" cursor={"pointer"} />



              {/* <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu> */}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

