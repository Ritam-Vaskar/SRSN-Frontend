import { useState } from 'react';
import './App.css';
import Navbar from './layouts/Navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './layouts/Footer/Footer';
import About from './sections/About/About';
import HolyTrio from './sections/HolyTrio/HolyTrio';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: 
      <>
        <Navbar/>
        {/* <HolyTrio/>
        <About/> */}
        <Footer/>
      </>
      
    }
  ]);

  return(
    <>
      
      <RouterProvider router={router} />
    </>
  ) 
}

export default App;
