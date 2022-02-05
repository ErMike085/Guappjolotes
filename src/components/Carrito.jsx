import React from "react";
import { Link } from "react-router-dom";

const Carrito = () => {
  let traerCarrito = JSON.parse(localStorage.getItem("carrito"));
  const { combo, carrito, totalProductos } = traerCarrito;

  let eliminarCarrito = () => {
    localStorage.clear();
  };

  const getPrecio = () => {
    let totalCompraCombo = combo.map((dato) => dato.precio * combo.length);
    let totalCompraCarrito = carrito.map((dato) => dato.precio * totalProductos);
    let totalCompra = Number(totalCompraCarrito) + Number(totalCompraCombo);
    return totalCompra;
  };
  return (
    <div>
      <Link to="/home/guajolotes">Home</Link>
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
      <h1>Total: $ {getPrecio()} MXN</h1>
      <button onClick={() => eliminarCarrito()}>Eliminar Carrito</button>
    </div>
  );
};

export default Carrito;
