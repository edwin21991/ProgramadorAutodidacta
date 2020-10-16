import React, {Component} from 'react'
import emailjs from 'emailjs-com'

import '../assets/styles/components/Footer.scss'
import facebook from '../assets/static/facebook.gif'
import twitter from '../assets/static/twitter.gif'
import linkedin from '../assets/static/linkedin.gif'
import youtube from '../assets/static/youtube.gif'
import tiktok from '../assets/static/tiktok.gif'
import foto from '../assets/static/foto.png'
import github from '../assets/static/github.gif'
import enviado from '../assets/static/enviado.gif'
import { render } from '@testing-library/react'

function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('gmail', 'template_hvu0cim', e.target, 'user_WAaolNPAniMVR3QEPkN3A')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}

const Footer = ()=>(

  <footer className = "footer">
    <div className="footer__container">
      <div className="footer__container-copy">
        <div className="footer__foto">
          <img src={foto} alt="" className="footer__img" />
          <div className="footer__copy">
            <p>&copy; 2020 Edwin Giovanny Sanchez Gongora</p>
          </div>
        </div>
      </div>
      <div className="footer__container_correo">
        <div className="footer__container__titulo-caja">
          <p className="footer__titulo-caja">Escribeme!!</p>
        </div>
        <form onSubmit={sendEmail}>
          <p>Asunto</p>
          <input type="text" name="from_name" required="required" onClick={msgNuevo}/>
          <p>Mensaje</p>
          <textarea name="mensaje" cols="40" rows="3" required="required" onClick={msgNuevo}></textarea>
          <div className="footer__enviar">
            <div className="footer__container-botoneEnviar">
              <input type="submit" name="enviar" value="Enviar" onClick={msgEnviado}/>
              <div id="footer__img">
                <img src={enviado} alt="enviado" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="footer__container-redes_principal">
        <div className="footer__container-redes">
          <a href = "https://www.facebook.com/programadorautodidacta/" target="_blank" className="footer__img" ><img src={facebook} alt="Facebook" /></a>
          <a href = "https://twitter.com/progAutodidacta" target="_blank" className="footer__img"><img src={twitter} alt="twitter" /></a>
          <a href = "https://linkedin.com/in/edwin-giovanny-sánchez-gongora-a27a30173" target="_blank" className="footer__img"><img src={linkedin} alt="linkedin" /></a>
        </div>
        <div className="footer__container-redes">
          <a href = "https://www.youtube.com/channel/UCSG7yWRwi6YKeSEQaF4ukHw?view_as=subscriber" target="_blank" className="footer__img"><img src={youtube} alt="youtube" /></a>
          <a href = "https://www.tiktok.com/@programadorautodidacta?lang=en" target="_blank" className="footer__img"><img src={tiktok} alt="tik tok" /></a>
          <a href = "https://github.com/edwin21991" target="_blank" className="footer__img"><img src={github} alt="github" /></a>
        </div>
      </div>
    </div>
    
  </footer>
)

function msgEnviado (){
  document.getElementById('footer__img').style.display="block";
}

function msgNuevo (){
  document.getElementById('footer__img').style.display="none";
}

export default Footer