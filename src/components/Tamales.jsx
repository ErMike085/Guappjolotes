import React, { useEffect, useState } from 'react';
import { Cards, ImagenP, InfoCard, Nombre, Precio } from '../styles/Productos';

const url = 'https://guappjolotes.herokuapp.com/tamales'
const Tamales = () => {
  const [tamales, setTamales] = useState([]);

  const getData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setTamales(data);
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      {
        tamales.map(prod=>(
          <Cards id={prod.id}>
            <ImagenP src={prod.imagen} alt='producto' />
            <InfoCard>
              <Nombre>{prod.nombre}</Nombre>
              <Precio>$ {prod.precio} MXN</Precio>
            </InfoCard>
          </Cards>
        ))
      }
    </div>)
};

export default Tamales;
