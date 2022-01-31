import types from "../type/types";

const ProductReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case types.agregarNumero:
      return {
        ...state,
        totalProductos: state.totalProductos + 1,
      };
    case types.disminuirNumero:
      return {
        ...state,
        totalProductos: state.totalProductos - 1,
      };
    case types.agregarCarrito:
      const nuevoCarrito = [...state.carrito];
      nuevoCarrito.push(action.payload);
      return {
        ...state,
        carrito: nuevoCarrito,
      };
    case types.quitarCarrito:
      let nuevoCarrito2 = [...state.carrito];
      let posicionProducto = nuevoCarrito2.findIndex((e) => e.id === action.payload.id);
      nuevoCarrito2 = nuevoCarrito2.filter((e, index) => index !== posicionProducto);
      return {
        ...state,
        carrito: nuevoCarrito2,
      };

    default: {
      return state;
    }
  }
};

export default ProductReducer;
