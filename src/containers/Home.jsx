import React, { Component } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Img, Nav } from "../styles/Home";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav>
          <Link to="/">
            <Img
              src="https://res.cloudinary.com/dpv7hhumv/image/upload/v1643215065/Amazonas/Ilustracio%CC%81n_sin_ti%CC%81tulo_66_1_thknhh.png"
              alt=""
            />
          </Link>
          <Link to="/" className="carrito">
            <AiOutlineShoppingCart className="carrito" />
          </Link>
        </Nav>
        <div>
          <h1>Nada como una Guajolota para empezar el día</h1>
          <input type="text" />
          <section>
            <div>
              <Link to={`/home/guajolotes`}>Guajolotas</Link>
              <Link to={`/home/bebidas`}>Bebidas</Link>
              <Link to={`/home/tamales`}>Tamales</Link>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
