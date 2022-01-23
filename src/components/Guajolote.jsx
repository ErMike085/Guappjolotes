import React, { useEffect, useState } from 'react';
import { Cards, ImagenP, InfoCard, Nombre, Precio } from '../styles/Productos';

const url = 'https://guappjolotes.herokuapp.com/guajolotes'
const Guajolote = () => {
  const [guajolotes, setGuajolotes] = useState([]);

  const getData = async () =>{
    const resp = await fetch(url);
    const data = await resp.json();
    setGuajolotes(data);
  }
  useEffect(()=>{
    getData();
  }, [])

  return (
  <div>
    {
      guajolotes.map(prod=>(
        <Cards id={prod.id}>
          <ImagenP src={prod.imagen} alt='Producto' />
          <InfoCard>
            <Nombre>{prod.nombre}</Nombre>
            <Precio>$ {prod.precio} MXN</Precio>
          </InfoCard>
        </Cards>
      ))
    }
  </div>)
};

export default Guajolote;
