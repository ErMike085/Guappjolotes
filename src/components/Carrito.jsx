import React from "react";
import { Link } from "react-router-dom";

const Carrito = () => {
  let traerCarrito = JSON.parse(localStorage.getItem("carrito"));
  const { combo, carrito } = traerCarrito;

  let eliminarCarrito = () => {
    localStorage.clear();
  };
  return (
    <div>
      <Link to="/home/guajolotes">Home</Link>
      <button onClick={() => eliminarCarrito()}>Eliminar Carrito</button>
      <ul>
        {carrito.map((prod) => (
          <li key={prod.id}>
            <img src={prod.imagen} alt="" />
            <h1>{prod.nombre}</h1>
            <p>$ {prod.precio} MXN</p>
          </li>
        ))}
        {combo.map((prod) => (
          <li key={prod.id}>
            <img src={prod.imagen} alt="" />
            <h1>{prod.nombre}</h1>
            <p>$ {prod.precio} MXN</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrito;
