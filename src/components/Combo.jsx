import React from "react";
// import productContext from "../context/ProductContext";
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
  // const productoContext = useContext(productContext);
  // const { agregarCarrito, quitarCarrito } = productContext;

  // let productoCombo, combo

  return (
    <div>
      <SegSubtitulo>Guajolocombo</SegSubtitulo>
      <Descrip>Selecciona la bebida que más te guste y disfruta de tu desayuno</Descrip>
      <ContAdicion>
        <ItemBebidas>
          <Check type="checkbox" name="" id="" />
          <Bebida src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642714719/guappjolota/B-CHAMPURRADO_d4bgmp.png" alt="bebida" />
          <NombreBe>Champurrado</NombreBe>
          <PrecioBe>+ $12 MXN</PrecioBe>
        </ItemBebidas>
        <BotonAgregar>Agregar </BotonAgregar>
      </ContAdicion>
      
    </div>
  );
};

export default Combo;
