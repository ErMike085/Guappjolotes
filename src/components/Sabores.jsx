import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../helpers/getData";
import { ContSabores, Sabores, Subtitulo } from "../styles/StyledSeleccion";

const SaboresCards = ({ producto, cambiarSabor, sabor }) => {
  const [saborImagen, setSaborImagen] = useState({});

  const getData = async () => {
    let urlFinal = url + "sabores";
    const resp = await fetch(urlFinal);
    const data = await resp.json();
    console.log(data);
    setSaborImagen(data);
  };

  // console.log(saborImagen.imagen);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Subtitulo>Sabor</Subtitulo>
      <ContSabores>
        {sabor.map((data) => (
          <Link key={data.id} to={`/detalle/${producto}/${data.id}`} onClick={() => cambiarSabor(data.id)}>
            <Sabores src={saborImagen.imagen} alt="Sabor" />
          </Link>
        ))}
      </ContSabores>
    </div>
  );
};

export default SaboresCards;