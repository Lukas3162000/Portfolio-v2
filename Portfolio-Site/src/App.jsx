import { useState } from 'react';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Components/Layout';
import Webdesign from './Pages/Webdesign';
import Media from './Pages/Media';
import About from './Pages/About';
import Contact from './Pages/Contact';


export default function App() {


  return (
    <>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home />} />
              <Route path='webdesign' element={ <Webdesign /> }/>
              <Route path='media' element={ <Media /> }/>
              <Route path='about' element={ <About /> }/>
              <Route path='contact' element={ <Contact /> }/>
            </Route>
          </Routes>
        </HashRouter>
    </>
  )
}
