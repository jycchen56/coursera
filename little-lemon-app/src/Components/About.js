import React, {useEffect} from 'react';
import { Box, Heading, HStack, VStack, Text as ChakraText, Image } from '@chakra-ui/react';
import chefB from '../assets/images/chefB.jpg';

function About() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <Box>
            <Box
            bg='white'
            color='black'
            p={16}
            >
                <HStack
                align='center'
                px={10}
                py={6}
                spacing='14em'
                >
                    <VStack
                    spacing={12}
                    align={'left'}
                    >
                        <Heading
                        size={'3xl'}
                        color={"#F4CE14"}
                        fontFamily={'Markazi Text'}
                        bg={'#495E57'}
                        p={6}
                        >
                            About Us
                        </Heading>
                        <ChakraText
                        fontSize={'2xl'}
                        color={'black'}
                        >
                            Little Lemon is a family-owned restaurant that has been serving the community for over 10 years. We pride ourselves on our fresh ingredients and authentic recipes. Our goal is to provide our customers with a unique dining experience that they will never forget.
                        </ChakraText>
                    </VStack>
                    <Image
                    src={chefB}
                    h='45em'
                    />
                </HStack>
            </Box>
        </Box>
    );
}

export default About;