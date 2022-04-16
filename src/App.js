import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About'
import Header from './components/Header/Header';
import Coins from "./components/Coins/Coins";
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'
import CoinDetails from './components/CoinDetails/CoinDetails';
import BdAddress from "./components/Contact/BdAddress";
import UsAddress from "./components/Contact/UsAddress";
import NotFound from "./components/NotFound/NotFound";
import Login from './components/Login/Login';
import Signup from "./components/Signup/Signup";


const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coins" element={<Coins></Coins>} />
        <Route path="/coin-details/:id" element={<CoinDetails></CoinDetails>} />

        <Route path="/contact" element={<Contact />} >
          <Route path="bd-address" element={<BdAddress></BdAddress>}></Route>
          <Route path="us-address" element={<UsAddress></UsAddress>}></Route>
        </Route >
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  )
}

export default App
