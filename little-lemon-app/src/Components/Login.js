import React, { useEffect } from 'react';
import { Box, Heading, Spacer } from '@chakra-ui/react';

function Login() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <Box
        p={28}
        >
            <Heading
            size={'3xl'}
            >
                Coming Soon!
            </Heading>
            <Spacer
            p={28}
            >
            </Spacer>
        </Box>
    );
}

export default Login;