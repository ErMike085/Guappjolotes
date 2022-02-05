import React, { useContext, useEffect, useState } from "react";
import productContext from "../context/ProductContext";
import { url } from "../helpers/getData";
import {
  Bebida,
  BotonAgregar,
  Check,
  ContAdicion,
  Descrip,
  ItemBebidas,
  NombreBe,
  PrecioBe,
  SegSubtitulo,
} from "../styles/StyledSeleccion";

const Combo = ({ producto }) => {
  const productoContext = useContext(productContext);
  const { agregarCombo, quitarCombo, combo, carrito } = productoContext;
  let urlProductoCombo, productoCombo;
  producto === "guajolotes" || producto === "tamales"
    ? (urlProductoCombo = "bebidas") && (productoCombo = "la bebida")
    : (urlProductoCombo = "guajolotes") && (productoCombo = "la torta");

  const [cards, setCards] = useState([]);

  const getData = async () => {
    const resp = await fetch(url + urlProductoCombo);
    const data = await resp.json();
    setCards(data);
  };

  const utilizarCombo = (e, data) => {
    let combo = e.target.checked;
    if (combo !== undefined) {
      combo ? agregarCombo(data) : quitarCombo(data);
    }
  };

  const guardarLocal = () => {
    let local = { combo, carrito };
    localStorage.setItem("carrito", JSON.stringify(local));
    console.log(local);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [combo]);

  let cantidad = combo.length + carrito.length;
  return (
    <div>
      <SegSubtitulo>Guajolocombo</SegSubtitulo>
      <Descrip>Selecciona {productoCombo} que más te guste y disfruta de tu desayuno</Descrip>
      <ContAdicion>
        {cards.map((data) => (
          <ItemBebidas key={data.id}>
            <Check type="checkbox" name="" id={data.id} onChange={(e) => utilizarCombo(e, data)} />
            <Bebida src={data.imagen} alt="bebida" />
            <NombreBe>{data.nombre}</NombreBe>
            <PrecioBe>+ $ {data.precio} MXN</PrecioBe>
          </ItemBebidas>
        ))}
        <BotonAgregar onClick={guardarLocal}>Agregar {cantidad} al carrito</BotonAgregar>
      </ContAdicion>
    </div>
  );
};

export default Combo;
