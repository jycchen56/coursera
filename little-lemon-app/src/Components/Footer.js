import {Box, HStack, Text as ChakraText, VStack} from '@chakra-ui/react';
import {faFacebook, faInstagram,} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socials = [
    {
      icon: faFacebook,
      url: "https://facebook.com",
    },
    {
      icon: faInstagram,
      url: "https://instagram.com",
    }
];

function Footer() {
    return(
        <Box
        bg='#495E57'
        color='white'
        w='100%'
        fontFamily='Markazi Text'
        fontSize='xl'
        >
            <Box
            bg='#EE9972'
            w='100%'
            p={6}
            m={0}
            flex='1'
            >
            </Box>
            <HStack
            p='8em'
            justifyContent='space-between'
            alignContent='center'
            align='center'
            >
                <ChakraText
                w='12em'
                >
                    Copyright 2013-2024 Little Lemon Inc.
                </ChakraText>
                <VStack
                align='center'
                w='12em'
                >
                    {socials.map((socials, index) => (
                        <a
                        key={index}
                        href={socials.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon = {socials.icon} size="2x" />
                        </a>
                    ))}
                </VStack>
                <ChakraText
                w='12em'
                >
                    Chicago, IL.
                </ChakraText>
            </HStack>
        </Box>
    );
}

export default Footer;