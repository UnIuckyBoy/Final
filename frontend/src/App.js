import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./components/layout/Home"
import Nav from "./components/layout/Nav"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Novedades from "./pages/Novedades"
import Contacto from "./pages/Contacto"
import Productos from "./pages/Productos"

function App() {
  return (
    <div className="App">
      {console.log("funca")}
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path={""} element={<Nav path={""} />}>
            <Route index element={<Home />} />
            <Route path={"Novedades"} element={<Novedades />} />
            <Route path={"Productos"} element={<Productos />} />
            <Route path={"Contacto"} element={<Contacto />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
