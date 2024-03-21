import { ChakraProvider } from "@chakra-ui/react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Header>
      </Header>
      <Main>
      </Main>
      <Footer>
      </Footer>
    </ChakraProvider>
  );
}

export default App;
