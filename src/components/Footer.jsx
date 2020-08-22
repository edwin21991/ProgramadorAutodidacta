import React from 'react'
import '../assets/styles/components/Footer.scss'
import facebook from '../assets/static/facebook.gif'
import twitter from '../assets/static/twitter.gif'
import linkedin from '../assets/static/linkedin.gif'
import youtube from '../assets/static/youtube.gif'
import tiktok from '../assets/static/tiktok.gif'
import foto from '../assets/static/foto.png'

const Footer = () =>(
  <footer className = "footer">
    <div className="footer__container-redes">
      <a href = "https://www.facebook.com/programadorautodidacta/" target="_blank"><img src={facebook} alt="Facebook"/></a>
      <a href = "https://twitter.com/progAutodidacta" target="_blank"><img src={twitter} alt="twitter" /></a>
      <a href = "https://linkedin.com/in/edwin-giovanny-sánchez-gongora-a27a30173" target="_blank"><img src={linkedin} alt="linkedin"/></a>
      <a href = "https://www.youtube.com/channel/UCSG7yWRwi6YKeSEQaF4ukHw?view_as=subscriber" target="_blank"><img src={youtube} alt="youtube"/></a>
      <a href = "https://www.tiktok.com/@programadorautodidacta?lang=en" target="_blank"><img src={tiktok} alt="tik tok"/></a>
    </div>
    <div className="footer__container-copy">
      <div className="footer__foto"><img src={foto} alt=""/></div>
      <div className="footer__copy"><p>&copy; 2020 Edwin Giovanny Sanchez Gongora</p></div>
    </div>
  </footer>
)

export default Footer