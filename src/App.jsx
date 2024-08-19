import { useState } from 'react';
import './App.css';
import Navbar from './layouts/Navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './layouts/Footer/Footer';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: 
      <>
        <Navbar/>
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
