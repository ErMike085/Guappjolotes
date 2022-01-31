import React from "react";
import { Link } from "react-router-dom";
import { ContSabores, Sabores, Subtitulo } from "../styles/StyledSeleccion";

const SaboresCards = ({ producto, cambiarSabor, sabor }) => {
  return (
    <div>
      <Subtitulo>Sabor</Subtitulo>
      <ContSabores>
        {sabor.map((data) => (
          <Link key={data.id} to={`/detalle/${producto}/${data.id}`} onClick={() => cambiarSabor(data.id)}>
            <Sabores src={data.imagen} alt="Sabor" />
          </Link>
        ))}
      </ContSabores>
    </div>
  );
};

export default SaboresCards;
