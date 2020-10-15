import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/Header.scss'
import Logo from '../assets/static/logo.jpg'
import Cafe from '../assets/static/cafe.png'

const Header = () => (

  <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img className="header__img" src={Logo} alt="Logo de Programador Autodidacta" />
        </div>
      </Link>
      <div className="header__titulo">
        <Link  to="/" className="header__Link">
            <h3>Programador Autodidacta</h3>
        </Link>
      </div>
      <div className="header__container">
        <Link  to="/">
          <div className="header__cafe">
            <img className="header__imgCafe" src={Cafe} alt="imagen de cafe" />
          </div>
        </Link>
      </div>
  </header>

)

export default Header