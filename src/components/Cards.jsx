import React, { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import { Card, ImagenP, InfoCard, Nombre, Precio } from "../styles/Productos";
import { Link, useParams } from "react-router-dom";

const Cards = () => {
  const [bebidas, setBebidas] = useState([]);

  const { producto } = useParams();

  console.log(producto);
  const traerDatos = async () => {
    const datos = await getData(producto);
    setBebidas(datos);
  };

  useEffect(() => {
    traerDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bebidas]);

  return (
    <div>
      {bebidas.map((prod) => (
        <Link to={`/detalle/`} key={prod.id}>
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
