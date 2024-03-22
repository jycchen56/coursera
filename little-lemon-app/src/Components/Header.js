import {Box, HStack, Image} from '@chakra-ui/react'
import React, { useEffect, useRef } from "react";
import {Link} from "react-router-dom";

function Header() {
    return(
    <Box
    bg='white'
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
              <Link
                to="/"
                style={{cursor: "pointer"}}
              >
                Home
              </Link>
              <Link
                to="/About"
                style={{cursor: "pointer"}}
              >
                About
              </Link>
              <Link
                to="/Menu"
                style={{cursor: "pointer"}}
              >
                Menu
              </Link>
              <Link
                to="/Reservations"
                style={{cursor: "pointer"}}
              >
                Reservations
              </Link>
              <Link
                to="/Order-online"
                style={{cursor: "pointer"}}
              >
                Order Online
              </Link>
              <Link
                to="/Login"
                style={{cursor: "pointer"}}
              >
                Login
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>

    );
}

export default Header;