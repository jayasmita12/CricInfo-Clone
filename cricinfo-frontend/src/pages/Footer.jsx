import { React } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Divider,

} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';


export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'8xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Text fontSize={"20"} fontWeight={"bold"}>Key Series</Text>
            <Divider/>
            <Link href={'#'}>India v Sounth Africa</Link>
            <Link href={'#'}>IND-W in SL</Link>
            <Link href={'#'}>Ranji Trophy</Link>
            <Link href={'#'}>England v New Zealand</Link>
            <Link href={'#'}>Sri Lanka v Australia</Link>
            <Link href={'#'}>West Indies v Bangladesh</Link>
            <Link href={'#'}>Netherlands v England</Link>
            <Link href={'#'}>England v New Zealand</Link>
            <Link href={'#'}>Ireland v India</Link>
            <Link href={'#'}>Vitality Blast</Link>
            <Link href={'#'}>County Div1</Link>
            <Link href={'#'}>County Div2</Link>
            <Link href={'#'}>Women's Championship</Link>
            <Link href={'#'}>World Test Championship</Link>
            <Link href={'#'}>World Cup Super League</Link>
            
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontSize={"20"} fontWeight={"bold"}>Quick Links</Text>
            <Divider/>
            <Link href={'#'}>T20 Time Out</Link>
            <Link href={'#'}>T20 Time Out Hindi</Link>
            <Link href={'#'}>ICC-Rankings</Link>
            <Link href={"#"}>Fantasy Pick</Link>
            <Link href={"#"}>Haan Ya Naa</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontSize={"20"} fontWeight={"bold"}>ESPNcricinfo Apps</Text>
            <Divider/>
            <Link href={'#'}>Andriod App</Link>
            <Link href={'#'}>iOS App</Link>
            
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontSize={"20"} fontWeight={"bold"}>Follow ESPNcricinfo</Text>
            <Divider/>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Youtube</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontSize={"20"} fontWeight={"bold"}>ESPN Sites</Text>
            <Divider/>
            <Link href={'#'}>The Cricket Monthly</Link>
            <Link href={'#'}>ESPN</Link>
            
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 ESPN Sports Media Ltd. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
          
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}