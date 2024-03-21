import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
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
