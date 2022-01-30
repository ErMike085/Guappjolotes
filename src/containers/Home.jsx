import React, { Component } from 'react';

import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Bebidas from '../components/Bebidas';
import Seleccion from '../components/Seleccion';




export default class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to={"/"}>
           
          </Link>
          <Link to={"/"}>
          <AiOutlineShoppingCart />
          </Link>
        </nav>
        <Bebidas />
        <Seleccion />
      </div>
    )
  }
}


