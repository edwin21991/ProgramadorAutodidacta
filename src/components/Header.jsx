import React from 'react'
import '../assets/styles/components/Header.scss'
import Logo from '../assets/static/logo.jpg'

const Header = () => (

  <header className="header">
    <img className="header__img" src={Logo} alt="Logo de Programador Autodidacta" />
    <h3>Programador Autodidacta</h3>
  </header>

)

export default Header