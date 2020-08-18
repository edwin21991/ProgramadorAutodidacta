import React from 'react'
import '../assets/styles/components/SectionHome.scss'

const SectionHome = () =>(

  <div className="section__container">
    <div className="section__texto">
      
        <h1>Binevenido</h1>
      
        <strong>
          Este sitio web está pensado para mostrar mi perfil profesional y el conocimiento actual que tengo en el manejo 
          del lenguaje JavaScript y el FrameWork o Libreria React JS inicialmente se puede destacar 
          que su estructura es responsive por lo que si la ves desde un móvil o tablet no tiene ningún problema
          ahora quisiera mencionar las tecnologías usadas para darle vida a este proyecto:
          <br/><br/>
          NOTA: Todo lo que voy a mencionar a continuación se puede validar verificando el proyecto en Github en el
          siguiente link: <a href="https://github.com/edwin21991/ProgramadorAutodidacta.git" target="_blank">programadorAutodidacta.</a><br/><br/>
          
          <div className="section__bineta">
            <li>
                El proyecto se inicio usando el comando "npx create-react-app programadorautodidacta"
                Lo que asegura que su estructura general está basado en la convención de desarrollo de React. 
            </li><br/>
            <li>
                El código en su mayoría o donde se requirió se uso JSX implementando JavaScript con HTML juntos.
            </li><br/>
            <li>
                Se incorporo Webpack para el empaquetado de los módulos y se configuro el archivo webpack.config.js, donde 
                se especifica la compilación de las extensiones de archivos que se vallan a manejar.
            </li><br/>
            <li>
                Se realizo la configuración de ESlint para tener un estándar en la sintaxis y estructura del código.
            </li><br/>
            <li>
                Se inicio el repositorio de Git conectado con Github.
            </li><br/>
            <li>
                Se realizo la configuración del archivo GitIngnore para especificar los archivos que serán incluidos
                en el repositorio de Git y Github.
            </li><br/>
            <li>
                Para el uso de los estilos se implemento el metalenguaje Sass logrando la creación de variables y
                la importación de otros archivos .scss.
            </li><br/>
            <li>
                Se creo una Fake API con ayuda de json-server para el control de los datos como los certificados de la 
                vista de "Preparación".
            </li><br/>
            <li>
                Se hizo uso de Reac Hooks para conectar la información de la Fake API. 
            </li><br/>
            <li>
                Para controlar el tipado de datos ingresados desde la Fake API se instalo PropTypes.
            </li><br/>
            <li>
                Se instalo React Router para controlar las rutas de la página y evitar que se recargue el navegador
                cuando se cambia de vista.
            </li><br/>
            <li>
                Se instalo e implemento Redux para el manejo de los estados de la aplicación englobando todas las rutas en 
                el Provider y manejando los datos de lectura desde el store, gracias a esto se puede tener un estado inicial
                del aplicativo.
            </li><br/>
          </div>
        </strong>
    </div>        
  </div>
)

export default SectionHome


