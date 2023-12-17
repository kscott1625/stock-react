import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Account from './routes/Account';
import { ThemeProvider } from './context/ThemeContext';
import axios from 'axios';

function App() {

  const [stock, getStock] = useState([]);
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
