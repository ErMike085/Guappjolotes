import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "../components/Cards";
import Login from "../components/Login";
import Seleccion from "../components/Seleccion";

function AppRouter() {
  return (
    <BrowserRouter>
      <Login />
      <Routes>
        <Route path="/home/:producto" element={<Cards />} />
        <Route path="/detalle/:producto/:id" element={<Seleccion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
