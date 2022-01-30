import React, { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import { Card, ImagenP, InfoCard, Nombre, Precio } from "../styles/Productos";
import { Link, useParams } from "react-router-dom";
import Home from "../containers/Home";

const Cards = () => {
  const [carta, setCarta] = useState([]);

  const { producto } = useParams();

  const traerDatos = async () => {
    const datos = await getData(producto);
    setCarta(datos);
  };

  useEffect(() => {
    traerDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carta]);

  return (
    <div>
      <Home />
      {carta.map((prod) => (
        <Link to={`/detalle/${producto}/${prod.id}`} key={prod.id}>
          <Card>
            <ImagenP src={prod.imagen} alt="Producto" />
            <InfoCard>
              <Nombre>{prod.nombre}</Nombre>
              <Precio>$ {prod.precio} MXN</Precio>
            </InfoCard>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
