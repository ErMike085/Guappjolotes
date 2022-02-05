import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../helpers/getData";
import { ContSabores, Sabores, Subtitulo } from "../styles/StyledSeleccion";

const SaboresCards = ({ producto, cambiarSabor }) => {
  const [sabor, setSabor] = useState([]);

  let urlProducto;
  producto === "guajolotes" ? (urlProducto = "saboresTortas") : (urlProducto = "saboresBebidas");

  const getData = async () => {
    const resp = await fetch(url + urlProducto);
    const data = await resp.json();
    setSabor(data);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sabor]);

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
