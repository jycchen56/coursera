import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import About from './Components/About';
import Menu from './Components/Menu';
import Reservations from './Components/Reservations';
import OrderOnline from './Components/OrderOnline';
import Login from './Components/Login';
import {BrowserRouter  as Router, Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/About' element={<About />} />
            <Route path='/Menu' element={<Menu />} />
            <Route path='/Reservations' element={<Reservations />} />
            <Route path='/Order-online' element={<OrderOnline />} />
            <Route path='/Login' element={<Login />} />
          </Routes>
        <Footer/>
      </Router>
    </ChakraProvider>
  );
}

export default App;
