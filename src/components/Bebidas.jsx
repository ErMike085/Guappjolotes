import React, { useEffect, useState } from "react";
import { Cards, Imagen, ImagenP, InfoCard, Nombre, Precio } from "../styles/Productos";

const url = 'https://guappjolotes.herokuapp.com/bebidas'
const Bebidas = () => {
  const [bebidas, setBebidas] = useState([]);

  const getData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setBebidas(data)
  }

  console.log(bebidas);

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>

      {
        bebidas.map(prod => (
          <Cards id={prod.id}>
            <ImagenP src={prod.imagen} alt="Producto" />
            <InfoCard>
              <Nombre>{prod.nombre}</Nombre>
              <Precio>$ {prod.precio} MXN</Precio>
            </InfoCard>
          </Cards>
        ))
      }

    </div>
  )
};

export default Bebidas;

