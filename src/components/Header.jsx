import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/Header.scss'
import Logo from '../assets/static/logo.jpg'

const Header = () => (

  <header className="header">
    <Link to="/">
      <img className="header__img" src={Logo} alt="Logo de Programador Autodidacta" />
    </Link>
    <h3>Programador Autodidacta</h3>
  </header>

)

export default Header