import types from "../type/types";

const ProductReducer = (state, action) => {
  const { carrito, combo } = state;
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
      const nuevoCarrito = [...carrito];
      nuevoCarrito.push(action.payload);
      return {
        ...state,
        carrito: nuevoCarrito,
      };
    case types.agregarCombo:
      const nuevoCombo = [...combo];
      nuevoCombo.push(action.payload);
      return {
        ...state,
        combo: nuevoCombo,
      };
    case types.quitarCombo:
      let nuevoCombo2 = [...state.combo];
      let posicionProducto2 = nuevoCombo2.findIndex((e) => e.id === action.payload.id);
      nuevoCombo2 = nuevoCombo2.filter((e, index) => index !== posicionProducto2);
      return {
        ...state,
        carrito: nuevoCombo2,
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
