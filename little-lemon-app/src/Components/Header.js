import {Box, HStack, Image} from '@chakra-ui/react'
import React, { useEffect, useRef } from "react";

function Header() {
    return(
      <Box bg='white'
        color="black"
        maxWidth="100%"
        margin="0 auto"
        fontFamily='Markazi Text'
        p='2'
        fontSize='xl'
        >
        <HStack
          px='6em'
          py={8}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <Image src='./Logo .svg' boxSize='100%'/>
          </nav>
          <nav>
            <HStack spacing={12}>
              <a
                href="/#projects"
                //onClick={handleClick("projects")}
                style={{cursor: "pointer"}}
              >
                Home
              </a>
              <a
                href="/#contact-me"
                //onClick={handleClick("contactme")}
                style={{cursor: "pointer"}}
              >
                About
              </a>
              <a
                href="/#projects"
                //onClick={handleClick("projects")}
                style={{cursor: "pointer"}}
              >
                Menu
              </a>
              <a
                href="/#projects"
                //onClick={handleClick("projects")}
                style={{cursor: "pointer"}}
              >
                Reservations
              </a>
              <a
                href="/#projects"
                //onClick={handleClick("projects")}
                style={{cursor: "pointer"}}
              >
                Order Online
              </a>
              <a
                href="/#projects"
                //onClick={handleClick("projects")}
                style={{cursor: "pointer"}}
              >
                Login
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>

    );
}

export default Header;