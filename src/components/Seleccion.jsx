import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
import {
  Bebida,
  BotonAgregar,
  BotonesCont,
  Cantidad,
  Check,
  Cont,
  ContAdicion,
  Contador,
  ContProduct,
  Descrip,
  ItemBebidas,
  Navb,
  NombreBe,
  NombreProd,
  PrecioBe,
  PrecioProd,
  Product,
  SegSubtitulo,
  StyledDiv,
} from "../styles/StyledSeleccion";
import { Link, useParams } from "react-router-dom";
import productContext from "../context/ProductContext";
import { url } from "../helpers/getData";
import SaboresCards from "./Sabores";

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

  const agregarProductoCarrito = () => {
    agregarNumero();
    agregarCarrito(detalle);
  };

  const quitarProductoCarrito = () => {
    disminuirNumero();
    quitarCarrito(detalle);
  };

  const cambiarSabor = (nuevoProducto) => {
    setSabor(nuevoProducto);
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, detalle]);
  return (
    <StyledDiv>
      <Cont>
        <Navb>
          <Link to="/home/guajolotes">
            <IoIosArrowBack />
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
          <BotonesCont onClick={() => quitarProductoCarrito()}>
            <AiOutlineMinusCircle />
          </BotonesCont>
          <Cantidad>{totalProductos}</Cantidad>
          <BotonesCont onClick={() => agregarProductoCarrito()}>
            <BsPlusCircle />
          </BotonesCont>
        </Contador>

        <SaboresCards producto={params.producto} cambiarSabor={cambiarSabor} sabor={productoSabor} />

        <SegSubtitulo>Guajolocombo</SegSubtitulo>
        <Descrip>Selecciona la bebida que más te guste y disfruta de tu desayuno</Descrip>
        <ContAdicion>
          <ItemBebidas>
            <Check type="checkbox" name="" id="" />
            <Bebida src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642714719/guappjolota/B-CHAMPURRADO_d4bgmp.png" alt="bebida" />
            <NombreBe>Champurrado</NombreBe>
            <PrecioBe>+ $12 MXN</PrecioBe>
          </ItemBebidas>
          <ItemBebidas>
            <Check type="checkbox" name="" id="" />
            <Bebida
              src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642714718/guappjolota/B-ARROZ_CON_LECHE_cgf6zu.png"
              alt="bebida"
            />
            <NombreBe>Atole de Arroz</NombreBe>
            <PrecioBe>+ $12 MXN</PrecioBe>
          </ItemBebidas>
          <ItemBebidas>
            <Check type="checkbox" name="" id="" />
            <Bebida src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642714718/guappjolota/B-CHOCOLATE_jzyh84.png" alt="bebida" />
            <NombreBe>Chocolate caliente</NombreBe>
            <PrecioBe>+ $12 MXN</PrecioBe>
          </ItemBebidas>
          <ItemBebidas>
            <Check type="checkbox" name="" id="" />
            <Bebida src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642714718/guappjolota/B-CAFE_gughuk.png" alt="bebida" />
            <NombreBe>Café negro</NombreBe>
            <PrecioBe>+ $12 MXN</PrecioBe>
          </ItemBebidas>
          <BotonAgregar>Agregar </BotonAgregar>
        </ContAdicion>
      </Cont>
    </StyledDiv>
  );
};

export default Seleccion;
