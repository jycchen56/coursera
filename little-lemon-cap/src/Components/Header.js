import React from 'react'
import { Box, HStack, Image } from "@chakra-ui/react";

function Header() {
    return(
        <header>
            <Box
            bg='#49SE57'
            w='100%'
            color='white'
            >
                <nav>
                    <Image src='./Logo.svg' alt='Little Lemon Logo'/>
                </nav>
            </Box>
        </header>
    );
}

export default Header;