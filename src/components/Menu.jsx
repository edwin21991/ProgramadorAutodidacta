import React from 'react'
import '../assets/styles/components/Menu.scss'

const Menu = () =>(
  <nav className="menu">
    <hr className="menu__space"/>
    <div className="menu__container">

      <button className="menu__button">Preparación</button>
      <button className="menu__button">Hoja de Vida</button>
      <button className="menu__button">Portafolio</button>
      <button className="menu__button">Sobre Mi</button>

    </div>
  </nav>
)

export default Menu