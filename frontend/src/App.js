import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/layout/Home"
import Nav from "./components/layout/Nav"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Nav path={"/"} />}>
            {/* <Route index element={<Home />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
