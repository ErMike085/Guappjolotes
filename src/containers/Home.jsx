import React, { Component } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ContDiv, Img, InputB, Nav, NavII } from "../styles/Home";

export default class Home extends Component {
  render() {
    return (
      <ContDiv>
        <Nav>
          <Link to="/">
            <Img
              src="https://res.cloudinary.com/dpv7hhumv/image/upload/v1643215065/Amazonas/Ilustracio%CC%81n_sin_ti%CC%81tulo_66_1_thknhh.png"
              alt=""
            />
          </Link>
          <Link to="/carrito" className="carrito">
            <AiOutlineShoppingCart className="carrito" />
          </Link>
        </Nav>
        <div>
          <h1>Nada como una Guajolota para empezar el día</h1>
          <InputB type="search" placeholder="Sabor de guajolote, bebida" />
          <section>
            <NavII>
              <Link className="LinkNav" to={`/home/guajolotes`}>
                Guajolotas
              </Link>
              <Link className="LinkNav" to={`/home/bebidas`}>
                Bebidas
              </Link>
              <Link className="LinkNav" to={`/home/tamales`}>
                Tamales
              </Link>
            </NavII>
          </section>
        </div>
      </ContDiv>
    );
  }
}
