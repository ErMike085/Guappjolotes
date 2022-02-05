import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinusCircle, AiOutlineShoppingCart } from "react-icons/ai";
import {
  BotonesCont,
  Cantidad,
  Cont,
  Contador,
  ContProduct,
  Navb,
  NombreProd,
  PrecioProd,
  Product,
  StyledDiv,
} from "../styles/StyledSeleccion";
import { Link, useParams } from "react-router-dom";
import productContext from "../context/ProductContext";
import { url } from "../helpers/getData";
import SaboresCards from "./Sabores";
import Combo from "./Combo";

const Seleccion = () => {
  const params = useParams();
  const [detalle, setDetalle] = useState({});
  const [productoSabor, setProductoSabor] = useState([]);
  const [sabor, setSabor] = useState(params.id);

  const productoContext = useContext(productContext);
  const { totalProductos, agregarNumero, disminuirNumero, agregarCarrito, quitarCarrito } = productoContext;

  const getData = async () => {
    const resp = await fetch(url + params.producto);
    const data = await resp.json();
    const findProducto = data.find((data) => data.id === Number(sabor));
    setDetalle(findProducto);
    setProductoSabor(data);
  };

  const subirCantidad = () => {
    agregarNumero();
    agregarCarrito(detalle);
  };

  const bajarCantidad = () => {
    disminuirNumero();
    quitarCarrito(detalle);
  };

  const cambiarSabor = (nuevoProducto) => {
    setSabor(nuevoProducto);
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <StyledDiv>
      <Cont>
        <Navb>
          <Link to="/home/guajolotes">
            <IoIosArrowBack />
          </Link>
          <Link to="/carrito" className="carrito">
            <AiOutlineShoppingCart className="carrito" />
          </Link>
        </Navb>
        <ContProduct>
          <Product src={detalle.imagen} alt={detalle.nombre} />
        </ContProduct>
        <center>
          <NombreProd>{detalle.nombre}</NombreProd>
          <PrecioProd>{detalle.precio}$ MXN</PrecioProd>
        </center>
        <Contador>
          <BotonesCont onClick={() => bajarCantidad()}>
            <AiOutlineMinusCircle />
          </BotonesCont>
          <Cantidad>{totalProductos}</Cantidad>
          <BotonesCont onClick={() => subirCantidad()}>
            <BsPlusCircle />
          </BotonesCont>
        </Contador>

        <SaboresCards producto={params.producto} cambiarSabor={cambiarSabor} sabor={productoSabor} />

        <Combo producto={params.producto} />
      </Cont>
    </StyledDiv>
  );
};

export default Seleccion;
