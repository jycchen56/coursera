import React from 'react';
import { useEffect } from 'react';
import { Box, Heading, HStack, VStack, Text as ChakraText, Image, Card, CardBody, CardHeader, Button, CardFooter } from '@chakra-ui/react';

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

function Menu() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  return (
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
  );
}

export default Menu;