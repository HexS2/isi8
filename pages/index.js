import Head from "next/head";
import {
  Flex,
  HStack,
  Button,
  Link,
  Center,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Fade } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Stack, Text,AspectRatio } from '@chakra-ui/react'
import {
  FaSoundcloud,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaSpotify,
  FaDeezer,
} from "react-icons/fa";
export default function Index() {
  return (
    <Container bgImage="url('/ezgif-4-dcf2f78ab1.gif')"
  maxW="container.2xl"  w="100%">

    
      <Head>
        <title>I.S.I. 8</title>
      </Head>
      <Fade in={true}>
        <Center h="500px" color="white">
          <Flex align="center">
            <Image
              mt={10}
              src="/logo_isi8_vector_white.svg"
              alt="me"
              width="500px"
              height="500px"
            />
          </Flex>

        </Center>
        <Center mt={10} h="100px">
          <HStack padding="50px" maxW="100%">
            <Button colorScheme="white">
              <Link href="https://www.instagram.com/isi8official/" isExternal>
                <Icon as={FaInstagram} w={10} h={10} color={"white"} />
              </Link>
            </Button>
            
            <Button colorScheme="white">
              <Link
                href="https://www.facebook.com/ISI-8-101967501917069"
                isExternal
              >
                <Icon as={FaFacebook} w={10} h={10} color={"white"} />
              </Link>
            </Button>
            <Button colorScheme="white">
              <Link
                href="https://www.youtube.com/channel/UCxsLcxMZRSAajpZQNTNsRrw"
                isExternal
              >
                <Icon as={FaYoutube} w={10} h={10} color={"white"} />
              </Link>
            </Button>
            <Button colorScheme="white">
              <Link href="https://soundcloud.com/isi8band" isExternal>
                <Icon as={FaSoundcloud} w={10} h={10} color={"white"} />
              </Link>
            </Button>
            <Button colorScheme="white">
              <Link
                href="https://open.spotify.com/artist/5T2HaRxXtwOZa71pnWCJSC?si=IvOq8q0DQH6j64hqW5pbhg"
                isExternal
              >
                <Icon as={FaSpotify} w={10} h={10} color={"white"} />
              </Link>
            </Button>
            <Button colorScheme="white">
              <Link
                href="https://www.deezer.com/fr/artist/178191167"
                isExternal
              >
                <Icon as={FaDeezer} w={10} h={10} color={"white"} />
              </Link>
            </Button>
          </HStack>


        </Center>
      </Fade>
    <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
      <AspectRatio maxW='560px' ratio={1}>
          <iframe 
          src="https://open.spotify.com/embed/album/7dgrYvAJs8zgOrb65BmHgB?utm_source=generator&theme=0" 
          width="100%" height="352" 
          frameBorder="0" allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
           loading="lazy"/>

</AspectRatio>
      <Center color="white" mt={20}>
    <Stack>
      <Text fontSize="sm" center color="subtle">
     {new Date().getFullYear()} © ISI8 All rights reserved.
      </Text>
    </Stack>
    </Center>
  </Container>
    </Container>
    
  );
}
