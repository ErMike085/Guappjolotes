import React from "react";
import { Link } from "react-router-dom";
import { CardMini, Cont, ImgProd, MiniCards, NombreP, PrecioP } from "../styles/StyledCarrito";

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
    <Cont>
      <Link className="GoHome" to="/home/guajolotes">Home</Link>
      <MiniCards>
        {carrito.map((prod) => (
          <CardMini key={prod.id}>
            <ImgProd src={prod.imagen} alt="" />
            <NombreP>{prod.nombre}</NombreP>
            <PrecioP>$ {prod.precio} MXN</PrecioP>
          </CardMini>
        ))}
        {combo.map((prod) => (
          <CardMini key={prod.id}>
            <img src={prod.imagen} alt="" />
            <NombreP>{prod.nombre}</NombreP>
            <PrecioP>$ {prod.precio} MXN</PrecioP>
          </CardMini>
        ))}
      </MiniCards>
      <h1>Total: $ {getPrecio()} MXN</h1>
      <button onClick={() => eliminarCarrito()}>Eliminar Carrito</button>
    </Cont>
  );
};

export default Carrito;
