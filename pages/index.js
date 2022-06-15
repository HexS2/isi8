import Head from "next/head";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  HStack,
  Box,
  Button,
  Link,
  Center,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";
import {
  FaSoundcloud,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <Container bg={"#1A202C"} maxW="container.2xl" h={"100vh"} w="100%">
      <Head>
        <title>I.S.I. 8</title>
      </Head>
      <Fade in={true}>
        <Center h="500px" color="white">
          <Flex align="center">
            <Image
              src="/logo_isi8_vector_white.svg"
              alt="me"
              width="500px"
              height="500px"
            />
          </Flex>
        </Center>
        <Center h="100px">
          <HStack padding="50px" maxW="100%">
            <Button colorScheme="white" variant="outline">
              <Link href="https://www.instagram.com/isi8official/" isExternal>
                <Icon as={FaInstagram} w={10} h={10} color={"white"} />
              </Link>
            </Button>
            <Button colorScheme="white" variant="outline">
              <Link
                href="https://www.facebook.com/ISI-8-101967501917069"
                isExternal
              >
                <Icon as={FaFacebook} w={10} h={10} color={"white"} />
              </Link>
            </Button>
            <Button colorScheme="white" variant="outline">
              <Link
                href="https://www.youtube.com/channel/UCxsLcxMZRSAajpZQNTNsRrw"
                isExternal
              >
                <Icon as={FaYoutube} w={10} h={10} color={"white"} />
              </Link>
            </Button>
            <Button colorScheme="white" variant="outline">
              <Link href="https://soundcloud.com/isi8band" isExternal>
                <Icon as={FaSoundcloud} w={10} h={10} color={"white"} />
              </Link>
            </Button>
          </HStack>
        </Center>
      </Fade>
    </Container>
  );
}
