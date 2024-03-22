import React, { useEffect } from 'react';
import { Box, Heading, VStack, Image, FormControl, FormLabel, Input, NumberInput, NumberInputField, Button } from '@chakra-ui/react';
import restaurant from '../assets/images/restaurant.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';


function Reservations() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            guests: 1,
            date: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            guests: Yup.number().min(1, 'Must be at least 1').required('Required'),
            date: Yup.date()
              .min(new Date(), 'Date must be in the future')
              .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname]);

    return (
        <Box
        bg='white'
        color='black'
        p={28}
        >
            <VStack
            spacing={12}
            >
            <Image
            src={restaurant}
            h={'20em'}
            w={'100%'}
            objectFit={'cover'}
            borderRadius='15px'
            />
            <Heading>
                Reservations
            </Heading>
            </VStack>
            <form onSubmit={formik.handleSubmit}>
                <FormControl isRequired mt={8}>
                    <FormLabel>Name</FormLabel>
                    <Input
                        id='name'
                        name='name'
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name && (
                    <Box mt={1} color="red" fontSize="sm">
                        {formik.errors.name}
                    </Box>
                    )}
                </FormControl>
                <FormControl isRequired mt={8}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        id='email'
                        name='email'
                        type='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                    <Box mt={1} color="red" fontSize="sm">
                        {formik.errors.email}
                    </Box>
                    )}
                </FormControl>
                <FormControl isRequired mt={8}>
                    <FormLabel>Number of Guests</FormLabel>
                    <NumberInput min={1} max={10}>
                        <NumberInputField
                            id='guests'
                            name='guests'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.guests}
                        />
                    </NumberInput>
                </FormControl>
                <FormControl isRequired mt={8}>
                <FormLabel>Date</FormLabel>
                    <Input
                        id='date'
                        name='date'
                        type='date'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                    />
                    {formik.touched.date && formik.errors.date && (
                    <Box mt={1} color="red" fontSize="sm">
                        {formik.errors.date}
                    </Box>
                    )}
                </FormControl>
                <Button mt={8} colorScheme='yellow' type='submit' w='10em'>
                    Submit
                </Button>
            </form>
        </Box>
    )
}

export default Reservations;