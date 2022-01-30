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
  ContSabores,
  Descrip,
  ItemBebidas,
  Navb,
  NombreBe,
  NombreProd,
  PrecioBe,
  PrecioProd,
  Product,
  Sabores,
  SegSubtitulo,
  Subtitulo,
} from "../styles/StyledSeleccion";
import { Link, useParams } from "react-router-dom";
import productContext from "../context/ProductContext";
import { url } from "../helpers/getData";

const Seleccion = () => {
  const params = useParams();
  const [detalle, setDetalle] = useState({});
  const [sabor, setSabor] = useState(params.id);

  const prouctoContext = useContext(productContext);
  const { totalProductos } = productContext;

  const getData = async () => {
    const resp = await fetch(url + params.producto);
    const data = await resp.json();
    const findProducto = data.find((data) => data.id === Number(sabor));
    setDetalle(findProducto);
    setSabor(data);
  };

  console.log(detalle);
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <Cont>
      <Navb>
        <Link to="/home/guajolotes">
          <IoIosArrowBack />
        </Link>
      </Navb>
      <ContProduct>
        <Product src={detalle.imagen} alt="Prod" />
      </ContProduct>
      <center>
        <NombreProd>{detalle.nombre}</NombreProd>
        <PrecioProd>{detalle.precio}$ MXN</PrecioProd>
      </center>
      <Contador>
        <BotonesCont>
          <AiOutlineMinusCircle />
        </BotonesCont>
        <Cantidad>0</Cantidad>
        <BotonesCont>
          <BsPlusCircle />
        </BotonesCont>
      </Contador>

      <Subtitulo>Sabor</Subtitulo>
      <ContSabores>
        <Sabores src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715052/guappjolota/verde_syxdii.png" alt="Sabor" />
        <Sabores src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715053/guappjolota/mole_endv5y.png" alt="Sabor" />
        <Sabores src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715053/guappjolota/rajas_tbfmg1.png" alt="Sabor" />
        <Sabores src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715053/guappjolota/pi%C3%B1a_ank3us.png" alt="Sabor" />
        <Sabores src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715053/guappjolota/pasas_v8wwvy.png" alt="Sabor" />
        <Sabores src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642715052/guappjolota/guayaba_njp1fu.png" alt="Sabor" />
      </ContSabores>
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
  );
};

export default Seleccion;
