import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "../components/Cards";
import Login from "../components/Login";
import Seleccion from "../components/Seleccion";
import ProductState from "../context/ProductState";

function AppRouter() {
  return (
    <ProductState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/:producto" element={<Cards />} />
          <Route path="/detalle/:producto/:id" element={<Seleccion />} />
        </Routes>
      </BrowserRouter>
    </ProductState>
  );
}

export default AppRouter;
