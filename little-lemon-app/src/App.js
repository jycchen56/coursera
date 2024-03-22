import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import {BrowserRouter  as Router, Route, Switch, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        <Footer/>
      </Router>
    </ChakraProvider>
  );
}

export default App;
