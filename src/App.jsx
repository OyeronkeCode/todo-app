import React from 'react';
import './App.scss';
// react-router-dom is an applicationa that allows you to create navigation in your app.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
