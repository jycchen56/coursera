import {Box, HStack, Image, VStack, Heading, Text as ChakraText, Button, Card, CardHeader, CardBody, CardFooter, Spacer} from '@chakra-ui/react';
import restaurantfood from '../assets/images/restauranfood.jpg';

const dishes = [
    {
        title: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "$12.99",
        getImageSrc: () => require("../assets/images/greek salad.jpg")
    },

    {
        title: "Bruchetta",
        description: "Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: "$5.99",
        getImageSrc: () => require("../assets/images/bruchetta.jpg")
    },

    {
        title: "Lemon Dessert",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: "$5.00",
        getImageSrc: () => require("../assets/images/lemon dessert.jpg")
    }
]

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
            p={10}
            margin={10}
            >
                <HStack
                align='center'
                spacing='58em'
                >
                    <Heading
                    p={10}
                    fontFamily='Markazi Text'
                    size='3xl'
                    >
                    This week's specials!
                    </Heading>
                    <Button
                    colorScheme='yellow'
                    p={8}
                    >
                        Online Menu
                    </Button>
                </HStack>
                <HStack
                px={10}
                py={6}
                spacing={20}
                align='baseline'
                >
                    {dishes.map((dish) => (
                        <Card
                        key={dish}
                        bg='#eeeeee'
                        w='40em'
                        h='40em'
                        overflow='hidden'
                        >
                            <CardHeader>
                                <Image
                                src={dish.getImageSrc()}
                                overflow='hidden'
                                h='20em'
                                w='100%'
                                objectFit='cover'
                                borderRadius='10px'
                                alt={dish.title}
                                />
                            </CardHeader>
                            <CardBody>
                                <VStack
                                align='baseline'
                                spacing={8}
                                >
                                    <HStack
                                    fontSize='lg'
                                    fontWeight='bold'
                                    spacing={30}
                                    >
                                        <ChakraText>
                                            {dish.title}
                                        </ChakraText>
                                        <ChakraText
                                        color='orange'
                                        >
                                            {dish.price}
                                        </ChakraText>
                                    </HStack>
                                    <ChakraText>
                                        {dish.description}
                                    </ChakraText>
                                </VStack>
                            </CardBody>
                            <CardFooter>
                                <HStack>
                                    <Button
                                    fontWeight='bold'
                                    colorScheme='yellow'
                                    p={5}
                                    >
                                        Order delivery
                                    </Button>
                                </HStack>
                            </CardFooter>
                    </Card>
                    ))}
                </HStack>
            </Box>
        </Box>
    );
}

export default Main;