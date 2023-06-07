'use client'
import
{
    Flex,
    HStack,
    Button,
    Link,
    Center,
    Image,
    Container,
    Icon,
    Fade,
    Box,
    Stack,
    Text,
    AspectRatio

} from "@chakra-ui/react";
import React from "react";


import
{
    FaSoundcloud,
    FaYoutube,
    FaInstagram,
    FaFacebook,
    FaSpotify,
    FaDeezer,
} from "react-icons/fa";

export default function Index()
{
    return (
        /*
        Main container
         */
        <Container bgImage="url('/background.gif')"
            maxW="container.2xl" w="100%" backgroundRepeat="repeat-y"
            backgroundSize="100%"
            backgroundAttachment="fixed">

            <Fade in={true}>
                <Center h="600px" color="white">
                    <Flex align="center">
                        <Image
                            mt={10}
                            src="/logo_isi8_vector_white.svg"
                            alt="me"
                            width="500"
                            height="500"
                        />
                    </Flex>

                </Center>
                <Center h="600px">
                    <HStack padding="50px" maxW="100%">
                        <Button colorScheme="white">
                            <Link href="https://www.instagram.com/isi8official/" target="_blank">
                                <Icon as={FaInstagram} w={10} h={10} color={"white"} />
                            </Link>
                        </Button>

                        <Button colorScheme="white">
                            <Link
                                href="https://www.facebook.com/ISI-8-101967501917069"
                                target="_blank"
                            >
                                <Icon as={FaFacebook} w={10} h={10} color={"white"} />
                            </Link>
                        </Button>
                        <Button colorScheme="white">
                            <Link
                                href="https://www.youtube.com/channel/UCxsLcxMZRSAajpZQNTNsRrw"
                                target="_blank"
                            >
                                <Icon as={FaYoutube} w={10} h={10} color={"white"} />
                            </Link>
                        </Button>
                        <Button colorScheme="white">
                            <Link href="https://soundcloud.com/isi8band" target="_blank">
                                <Icon as={FaSoundcloud} w={10} h={10} color={"white"} />
                            </Link>
                        </Button>
                        <Button colorScheme="white">
                            <Link
                                href="https://open.spotify.com/artist/5T2HaRxXtwOZa71pnWCJSC?si=IvOq8q0DQH6j64hqW5pbhg"
                                target="_blank"
                            >
                                <Icon as={FaSpotify} w={10} h={10} color={"white"} />
                            </Link>
                        </Button>
                        <Button colorScheme="white">
                            <Link
                                href="https://www.deezer.com/fr/artist/178191167"
                                target="_blank"
                            >
                                <Icon as={FaDeezer} w={10} h={10} color={"white"} />
                            </Link>
                        </Button>
                    </HStack>


                </Center>
            </Fade>
            <React.Suspense fallback={<p>Chargement...</p>}>
                <Box w='100%' h='1000px' bgImage="url('/isi8_book_2023_page-0001.jpg')" bgSize='cover' bgAttachment='fixed'
                    bgPos='50% 100%' pos='relative' bgRepeat='no-repeat' objectFit={"cover"}>
                </Box>
            </React.Suspense>
            <React.Suspense fallback={<p>Chargement...</p>}>
                <Box w='100%' h='1000px' bg='blue' bgImage="url('/isi8_book_2023_page-0002.jpg')" bgSize='cover'
                    bgAttachment='fixed' bgPos='50% 100%' pos='relative' bgRepeat='no-repeat'> </Box>
            </React.Suspense>
            <React.Suspense fallback={<p>Chargement...</p>}>
                <Box w='100%' h='1000px' bg='blue' bgImage="url('/isi8_book_2023_page-0003.jpg')" bgSize='cover'
                    bgAttachment='fixed' bgPos='50% 100%' pos='relative' bgRepeat='no-repeat'> </Box>
            </React.Suspense>
            <React.Suspense fallback={<p>Chargement...</p>}>
                <Box w='100%' h='1000px' bg='blue' bgImage="url('/isi8_book_2023_page-0004.jpg')" bgSize='cover'
                    bgAttachment='fixed' bgPos='50% 100%' pos='relative' bgRepeat='no-repeat'> </Box>
            </React.Suspense>
            <React.Suspense fallback={<p>Chargement...</p>}>
                <Box w='100%' h='1000px' bg='blue' bgImage="url('/isi8_book_2023_page-0005.jpg')" bgSize='cover'
                    bgAttachment='fixed' bgPos='50% 100%' pos='relative' bgRepeat='no-repeat'> </Box>
            </React.Suspense>
            <React.Suspense fallback={<p>Chargement...</p>}>
                <Box w='100%' h='1000px' bg='blue' bgImage="url('/isi8_book_2023_page-0006.jpg')" bgSize='cover'
                    bgAttachment='fixed' bgPos='50% 100%' pos='relative' bgRepeat='no-repeat'> </Box>
            </React.Suspense>

            <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
                <AspectRatio maxW='560px' ratio={1}>
                    <React.Suspense fallback={<div>Chargement...</div>}>
                        <iframe
                            src="https://open.spotify.com/embed/album/7dgrYvAJs8zgOrb65BmHgB?utm_source=generator&theme=0"

                            width="100%" height="352"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy" />
                    </React.Suspense>

                </AspectRatio>
                <Center color="white" mt={20}>
                    <Stack>
                        <Text fontSize="sm" color="subtle">
                            {new Date().getFullYear()} © ISI8 All rights reserved.
                        </Text>
                    </Stack>
                </Center>
            </Container>
        </Container>
    );
}
