import React, { Component } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Seleccion from "../components/Seleccion";

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to={"/"}></Link>
          <Link to="/" className="carrito">
            <AiOutlineShoppingCart className="carrito" />
          </Link>
        </nav>
        <Seleccion />
      </div>
    );
  }
}
