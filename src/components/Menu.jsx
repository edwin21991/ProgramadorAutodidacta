import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/Menu.scss'

const Menu = () =>(
  <nav className="menu">
    <hr className="menu__space"/>
    <div className="menu__container">

      <Link to="/preparacion">
        <button className="menu__button">Preparación</button>
      </Link>
      
      <a href="../../public/doc/Hoja de vida Edwin Sanchez.pdf" target="_blank"><button className="menu__button">Hoja de Vida</button></a>
      
      <Link to="/portafolio">
        <button className="menu__button">Portafolio</button>
      </Link>
      <Link to="sobremi">
        <button className="menu__button">Sobre Mi</button>
      </Link>

    </div>
  </nav>
)

export default Menu