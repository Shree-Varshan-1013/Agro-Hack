import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Fruits from './fruits';  
import Grains from './grains';
import Vegetables from './vegetable';
import Home from './home';
import Navbar from './navbar';
import About from './about';
import Consumer from './consumer';
import SignInSide from './SigninSide';
import SignUpSide from './SignUpSide';
import Services from './services';
import AddCart from "./addCart";
import Payment from './payment';

const App = () => {

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(cart);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    console.log(arr[ind].amount);
    setCart([...arr]);
  };

  useEffect(() => {
    console.log("cart change");
  }, [cart]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/grains" element={<Grains handleClick={handleClick} />}></Route>
        <Route path="/vegetables" element={<Vegetables handleClick={handleClick} />}></Route>
        <Route path="/fruits" element={<Fruits handleClick={handleClick} />}></Route>
        <Route path="/mycart" element={<AddCart cart={cart} setCart={setCart} handleChange={handleChange}/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='/consumer' element={<Consumer />}></Route>
        <Route path='/signin' element={<SignInSide />}></Route>
        <Route path='/signup' element={<SignUpSide />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
      </Routes>
    </div>
  );
}

export default App;


