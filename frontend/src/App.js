import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/layout/Home"
import Nav from "./components/layout/Nav"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Novedades from "./pages/Novedades"
import Nosotros from "./pages/Nosotros"
import Contacto from "./pages/Contacto"

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Nav path={"/"} />}>
            <Route index element={<Home />} />
            <Route path={"/Novedades"} element={<Novedades />} />
            <Route path={"/Productos"} element={<Nosotros />} />
            <Route path={"/Contacto"} element={<Contacto />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
