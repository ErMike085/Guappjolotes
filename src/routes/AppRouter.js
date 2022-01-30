import { BrowserRouter, Route, Routes } from "react-router-dom";
import Seleccion from "../components/Seleccion";
import Hola from "../containers/Hola";
import Home from "../containers/Home";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:producto" element={<Hola />} />
        <Route path="/detalle" element={<Seleccion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
