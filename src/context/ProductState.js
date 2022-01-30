import React, { useReducer } from "react";
import productContext from "./ProductContext";
import ProductReducer from "./ProductReducer";
import types from "../type/types";

const ProductState = ({ children }) => {
  const estadoInicial = {
    totalProductos: 0,
    carrito: [],
  };
  const [state, dispatch] = useReducer(ProductReducer, estadoInicial);

  const agregarNumero = () => {
    dispatch({
      type: types.agregarNumero,
    });
  };

  const disminuirNumero = () => {
    dispatch({
      type: types.disminuirNumero,
    });
  };

  const agregarCarrito = (producto) => {
    dispatch({
      type: types.agregarCarrito,
      payload: producto,
    });
  };

  const quitarCarrito = (producto) => {
    dispatch({
      type: types.quitarCarrito,
      payload: producto,
    });
  };

  return (
    <productContext.Provider
      value={{
        totalProductos: state.totalProductos,
        carrito: state.carrito,
        agregarNumero,
        disminuirNumero,
        agregarCarrito,
        quitarCarrito,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductState;
