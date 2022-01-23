import React, { Component } from 'react';

import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Bebidas from '../components/Bebidas';




export default class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to={"/"}>
            {/* <img></img> */}
          </Link>
          <Link to={"/"}>
          <AiOutlineShoppingCart />
          </Link>
        </nav>
        <Bebidas />
      </div>
    )
  }
}


