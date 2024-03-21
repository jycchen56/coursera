import {Box, HStack, Image, VStack, Heading, Text as ChakraText, Button, Card, CardHeader, CardBody, CardFooter} from '@chakra-ui/react';
import restaurantfood from '../assets/images/restauranfood.jpg';

function Main() {
    return(
        <Box>
            <Box
            bg='#495E57'
            color='white'
            w='100%'
            h='100%'
            px={10}
            py={10}
            >
                <HStack
                px={10}
                py={6}
                spacing='26em'
                align='center'
                >
                    <VStack
                    px={10}
                    py={10}
                    spacing={4}
                    align='left'
                    >
                        <Heading fontFamily='Markazi Text' size='4xl' color='#F4CE14'>
                            Little Lemon
                        </Heading>
                        <Heading fontFamily='Markazi Text' size='2xl'>
                            Chicago
                        </Heading>
                        <ChakraText fontSize='2xl' maxW='12em' noOfLines={[2,3,4,5]}>
                            We are a family owned Mediterranea restauraunt, focused on recipes served with a modern twist.
                        </ChakraText>
                        <Button
                        w='16em'
                        h='3em'
                        colorScheme='yellow'
                        >
                            Reserve a Table
                        </Button>
                    </VStack>
                    <Box
                    px={0}
                    py={0}
                    >
                    <Image
                    src={restaurantfood}
                    overflow='hidden'
                    h='45em'
                    w='50em'
                    objectFit='cover'
                    borderRadius='15px'
                    />
                    </Box>
                </HStack>
            </Box>
            <Box
            bg='white'
            color='black'
            >
                <HStack>
                    <Card>
                        <CardHeader>
                            indeed
                        </CardHeader>
                    </Card>
                </HStack>
            </Box>
        </Box>
    );
}

export default Main;