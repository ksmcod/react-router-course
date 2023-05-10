import { BrowserRouter,Routes,Route,Link,NavLink } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import Home from "./pages/Home"
import About from "./pages/About"


export default function app() {
  
  useEffect(() => {
    document.title = "React Router"
  },[])

  return (
    <BrowserRouter>
    <header>
      <Link to="/">Home</Link>
      <NavLink to="about">About</NavLink>
    </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}