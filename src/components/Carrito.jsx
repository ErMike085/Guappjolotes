import React from "react";
import { Link } from "react-router-dom";
import { BtnEliminar, BtnPagar, CardMini, Cont, ContTotal, ImgProd, MiniCards, NombreP, PrecioP, PrecioTotal, TotalT } from "../styles/StyledCarrito";

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
      <BtnEliminar onClick={() => eliminarCarrito()}>Eliminar Carrito</BtnEliminar>

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
      <ContTotal>
      <TotalT>Total:  <PrecioTotal> $ {getPrecio()} MXN</PrecioTotal></TotalT>
      </ContTotal>
      <BtnPagar>Pagar</BtnPagar>
    </Cont>
  );
};

export default Carrito;
