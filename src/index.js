import React from 'react'
import ReactDOM from 'react-dom'
import { Provider} from 'react-redux'
import { createStore } from 'redux'

import App from './routes/App'
import reducer from './reducers/index'

const initialState = {
  "Favorite": [],
  "Universidad": [
    {
      "id": 2,
      "title": "Tecnico Profecional en Programacion Web",
      "type": "Universidad Presencial",
      "year": "2018",
      "duration": "2 Años",
      "cover": "../../public/images/tecnico.png",
      "institute": "Teinco",
      "source": "../assets/static/certificadoTecnico.png"
    },
    {
      "id": 3,
      "title": "Tecnologo En Desarrollo De Software",
      "type": "Universidad Presencial",
      "year": "2020",
      "duration": "3 Años",
      "cover": "../../public/images/tecnologo.png",
      "institute": "Teinco",
      "source": "../assets/static/certificadoTecnolgo.png"
    },
    {
      "id": 4,
      "title": "Ingenieria De Sistemas",
      "type": "Universidad Presencial",
      "year": "Actualmente 7 Semestre",
      "duration": "4.5 Años",
      "cover": "../../public/images/ingenieria.png",
      "institute": "Teinco",
      "source": "../assets/static/certificadoIngeniero.png"
    }
  ],
  "DiplomadoJavaScript": [
    {
      "id": 5,
      "title": "Diplomado en JavaScript",
      "type": "Diplomado Online",
      "year": "2020",
      "duration": "244 horas",
      "cover": "../../public/images/diploma-escuela-javascript.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 6,
      "title": "Curso Profesional de Git y GitHub",
      "type": "Academia Online",
      "year": "2020",
      "duration": "22 Horas",
      "cover": "../../public/images/diploma-git-github.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 7,
      "title": "Buenas Prácticas y Entorno de Desarrollo",
      "type": "Academia Online",
      "year": "2020",
      "duration": "6 Horas",
      "cover": "../../public/images/diploma-prework.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 8,
      "title": "Curso de Frontend Developer",
      "type": "Academia Online",
      "year": "2020",
      "duration": "24 Horas",
      "cover": "../../public/images/diploma-frontend-developer.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 9,
      "title": "Curso Básico de JavaScript",
      "type": "Academia Online",
      "year": "2020",
      "duration": "18 Horas",
      "cover": "../../public/images/diploma-basico-javascript.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 10,
      "title": "Fundamentos de JavaScript",
      "type": "Academia Online",
      "year": "2020",
      "duration": "23 Horas",
      "cover": "../../public/images/diploma-fundamentos-javascript.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 11,
      "title": "Curso de ECMAScript 6+",
      "type": "Academia Online",
      "year": "2020",
      "duration": "11 Horas",
      "cover": "../../public/images/diploma-ecmascript-6.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 12,
      "title": "Curso de Asincronismo con JavaScript",
      "type": "Academia Online",
      "year": "2020",
      "duration": "6 Horas",
      "cover": "../../public/images/diploma-asincronismo-js.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 13,
      "title": "Curso Profesional de JavaScript",
      "type": "Academia Online",
      "year": "2020",
      "duration": "21 Horas",
      "cover": "../../public/images/diploma-javascript-profesional.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 14,
      "title": "Curso Práctico de React JS",
      "type": "Academia Online",
      "year": "2020",
      "duration": "15 Horas",
      "cover": "../../public/images/diploma-react-practico.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 15,
      "title": "Curso de React Router y Redux",
      "type": "Academia Online",
      "year": "2020",
      "duration": "13 Horas",
      "cover": "../../public/images/diploma-react-router-redux.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 16,
      "title": "Curso de Fundamentos de Node.js",
      "type": "Academia Online",
      "year": "2020",
      "duration": "16 Horas",
      "cover": "../../public/images/diploma-fundamentos-node.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 17,
      "title": "Curso de Backend con Node.js",
      "type": "Academia Online",
      "year": "2020",
      "duration": "24 Horas",
      "cover": "../../public/images/diploma-backend-nodejs.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 18,
      "title": "Curso de Server Side Render con Express",
      "type": "Academia Online",
      "year": "2020",
      "duration": "16 Horas",
      "cover": "../../public/images/diploma-ssr.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 19,
      "title": "Curso de Autenticación con Passport.js",
      "type": "Academia Online",
      "year": "2020",
      "duration": "17 Horas",
      "cover": "../../public/images/diploma-passport.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 20,
      "title": "Curso de Integración de Backend y Frontend",
      "type": "Academia Online",
      "year": "2020",
      "duration": "12 Horas",
      "cover": "../../public/images/diploma-bff.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    }
  ],
  "DiplomadoReactJS": [
    {
      "id": 21,
      "title": "Diplomado en React JS",
      "type": "Academia Online",
      "year": "2020",
      "duration": "242 Horas",
      "cover": "../../public/images/diplomado-react.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 22, 
      "title": "Curso de ECMAScript 6+",
      "type": "Diplomado Online",
      "year": "2020",
      "duration": "11 horas",
      "cover": "../../public/images/diploma-ecmascript-6.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 23,
      "title": "Curso Profesional de JavaScript",
      "type": "Academia Online",
      "year": "2020",
      "duration": "21 Horas",
      "cover": "../../public/images/diploma-javascript-profesional.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 24,
      "title": "Curso de React.js",
      "type": "Academia Online",
      "year": "2020",
      "duration": "21 Horas",
      "cover": "../../public/images/diploma-react.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 25,
      "title": "Curso Práctico de React JS",
      "type": "Academia Online",
      "year": "2020",
      "duration": "15 Horas",
      "cover": "../../public/images/diploma-react-practico.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 26,
      "title": "Curso de Postman",
      "type": "Academia Online",
      "year": "2020",
      "duration": "10 Horas",
      "cover": "../../public/images/diploma-postman.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 27,
      "title": "Curso de Webpack",
      "type": "Academia Online",
      "year": "2020",
      "duration": "14 Horas",
      "cover": "../../public/images/diploma-webpack.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 28,
      "title": "Curso de Gestión de Dependencias y Paquetes con NPM",
      "type": "Academia Online",
      "year": "2020",
      "duration": "9 Horas",
      "cover": "../../public/images/diploma-npm.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 29,
      "title": "Curso de React Router",
      "type": "Academia Online",
      "year": "2020",
      "duration": "10 Horas",
      "cover": "../../public/images/diploma-react-router.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 30,
      "title": "Curso de Redux por Bedu",
      "type": "Academia Online",
      "year": "2020",
      "duration": "23 Horas",
      "cover": "../../public/images/diploma-redux.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 31,
      "title": "Curso de React Router y Redux",
      "type": "Academia Online",
      "year": "2020",
      "duration": "13 Horas",
      "cover": "../../public/images/diploma-react-router-redux.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 32,
      "title": "Curso Básico de GraphQL",
      "type": "Academia Online",
      "year": "2020",
      "duration": "11 Horas",
      "cover": "../../public/images/diploma-graphql.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 33,
      "title": "Curso de Next.js 2018",
      "type": "Academia Online",
      "year": "2020",
      "duration": "13 Horas",
      "cover": "../../public/images/diploma-next-2018.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 34,
      "title": "Curso de Desarrollo de Aplicaciones Web con Gatsby JS",
      "type": "Academia Online",
      "year": "2020",
      "duration": "22 Horas",
      "cover": "../../public/images/diploma-gatsby.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 35,
      "title": "Curso de Progressive Web Apps con React.js",
      "type": "Academia Online",
      "year": "2020",
      "duration": "8 Horas",
      "cover": "../../public/images/diploma-pwa-react-js.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 36,
      "title": "Curso de React Avanzado",
      "type": "Academia Online",
      "year": "2020",
      "duration": "24 Horas",
      "cover": "../../public/images/diploma-react-avanzado.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 37,
      "title": "Curso de React Native",
      "type": "Academia Online",
      "year": "2020",
      "duration": "17 Horas",
      "cover": "../../public/images/diploma-react-native.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    }
  ],
  "DiplomadoReactNative": [
    {
      "id": 38,
      "title": "Diplomado en React Native",
      "type": "Academia Online",
      "year": "2020",
      "duration": "160 Horas",
      "cover": "../../public/images/diplomado-react-native.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 39, 
      "title": "Curso de ECMAScript 6+",
      "type": "Diplomado Online",
      "year": "2020",
      "duration": "11 horas",
      "cover": "../../public/images/diploma-ecmascript-6.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 40,
      "title": "Curso Profesional de JavaScript",
      "type": "Academia Online",
      "year": "2020",
      "duration": "21 Horas",
      "cover": "../../public/images/diploma-javascript-profesional.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 41,
      "title": "Curso de React.js",
      "type": "Academia Online",
      "year": "2020",
      "duration": "21 Horas",
      "cover": "../../public/images/diploma-react.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 42,
      "title": "Curso Práctico de React JS",
      "type": "Academia Online",
      "year": "2020",
      "duration": "15 Horas",
      "cover": "../../public/images/diploma-react-practico.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 43,
      "title": "Curso de React Router",
      "type": "Academia Online",
      "year": "2020",
      "duration": "10 Horas",
      "cover": "../../public/images/diploma-react-router.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 44,
      "title": "Curso de Redux por Bedu",
      "type": "Academia Online",
      "year": "2020",
      "duration": "23 Horas",
      "cover": "../../public/images/diploma-redux.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 45,
      "title": "Curso de React Router y Redux",
      "type": "Academia Online",
      "year": "2020",
      "duration": "13 Horas",
      "cover": "../../public/images/diploma-react-router-redux.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 46,
      "title": "Curso de React Avanzado",
      "type": "Academia Online",
      "year": "2020",
      "duration": "24 Horas",
      "cover": "../../public/images/diploma-react-avanzado.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 47,
      "title": "Curso de React Native",
      "type": "Academia Online",
      "year": "2020",
      "duration": "17 Horas",
      "cover": "../../public/images/diploma-react-native.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 48,
      "title": "Curso de React Navigation",
      "type": "Academia Online",
      "year": "2020",
      "duration": "17 Horas",
      "cover": "../../public/images/diploma-react-navigation.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    }
  ],
  "Cursos": [
    {
      "id": 49,
      "title": "WebPack 2017",
      "type": "Academia Online",
      "year": "2020",
      "duration": "16 Horas",
      "cover": "../../public/images/diploma-webpack-2017.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 50,
      "title": "Curso Profesional de Redux 2018",
      "type": "Academia Online",
      "year": "2020",
      "duration": "15 Horas",
      "cover": "../../public/images/diploma-redux-2018.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 51,
      "title": "React JS 2017",
      "type": "Academia Online",
      "year": "2020",
      "duration": "16 Horas",
      "cover": "../../public/images/diploma-react-2017.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 52,
      "title": "Pramación Basica",
      "type": "Academia Online",
      "year": "2018",
      "duration": "24 Horas",
      "cover": "../../public/images/diploma-programacion-basica.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 53,
      "title": "Marca Personal",
      "type": "Academia Online",
      "year": "2018",
      "duration": "10 Horas",
      "cover": "../../public/images/diploma-marca-personal.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 54,
      "title": "Curso de Astrobiologia",
      "type": "Academia Online",
      "year": "2020",
      "duration": "9 Horas",
      "cover": "../../public/images/diploma-astrobiologia.png",
      "institute": "Platzi",
      "source": "https://platzi.com/@edwin.sanchez383"
    },
    {
      "id": 55,
      "title": "Curso de administrador de bases de datos",
      "type": "Academia Online",
      "year": "2018",
      "duration": "10 Horas",
      "cover": "../../public/images/administrador de bases de datos.png",
      "institute": "Capacitate Para el Empleo",
      "source": "https://capacitateparaelempleo.org/verifica/j1o0b13tg/"
    },
    {
      "id": 56,
      "title": "Curso de administrador de servidores",
      "type": "Academia Online",
      "year": "2018",
      "duration": "10 Horas",
      "cover": "../../public/images/administrador de servidores.png",
      "institute": "Capacitate Para el Empleo",
      "source": "https://capacitateparaelempleo.org/verifica/d5t0jqehm/"
    },
    {
      "id": 57,
      "title": "Curso de curador de datos",
      "type": "Academia Online",
      "year": "2018",
      "duration": "10 Horas",
      "cover": "../../public/images/curador de datos.png",
      "institute": "Capacitate Para el Empleo",
      "source": "https://capacitateparaelempleo.org/verifica/5u6ky8v8s/"
    },
    {
      "id": 58,
      "title": "Curso de desarrollador back end",
      "type": "Academia Online",
      "year": "2018",
      "duration": "10 Horas",
      "cover": "../../public/images/desarrollador back end.png",
      "institute": "Capacitate Para el Empleo",
      "source": "https://capacitateparaelempleo.org/verifica/xwjah50c3/"
    },
    {
      "id": 59,
      "title": "Curso de desarrollador de aplicaciones moviles",
      "type": "Academia Online",
      "year": "2018",
      "duration": "10 Horas",
      "cover": "../../public/images/desarrollador de aplicaciones moviles.png",
      "institute": "Capacitate Para el Empleo",
      "source": "https://capacitateparaelempleo.org/verifica/1cxlfubte/"
    },
    {
      "id": 60,
      "title": "Curso de desarrollador front end",
      "type": "Academia Online",
      "year": "2018",
      "duration": "10 Horas",
      "cover": "../../public/images/desarrollador front end.png",
      "institute": "Capacitate Para el Empleo",
      "source": "https://capacitateparaelempleo.org/verifica/94xajwus/"
    },
    {
      "id": 61,
      "title": "Curso de desarrollaro de video juegos",
      "type": "Academia Online",
      "year": "2018",
      "duration": "10 Horas",
      "cover": "../../public/images/desarrollaro de video juegos.png",
      "institute": "Capacitate Para el Empleo",
      "source": "https://capacitateparaelempleo.org/verifica/0jk2d3yqy/"
    },
    {
      "id": 62,
      "title": "Curso de diploma de fibra optica",
      "type": "Academia Online",
      "year": "2018",
      "duration": "10 Horas",
      "cover": "../../public/images/diploma de fibra optica.png",
      "institute": "Capacitate Para el Empleo",
      "source": "https://capacitateparaelempleo.org/verifica/19a0t3szh/"
    },
    {
      "id": 63,
      "title": "Curso de programacion orientada a objetos",
      "type": "Academia Online",
      "year": "2018",
      "duration": "10 Horas",
      "cover": "../../public/images/programacion orientada a objetos.png",
      "institute": "Capacitate Para el Empleo",
      "source": "https://capacitateparaelempleo.org/verifica/38y07niy5/"
    },
    {
      "id": 64,
      "title": "English dot Works Beginner",
      "type": "Academia Online",
      "year": "2018",
      "duration": "60 Hs Valida Certificado 9539001750250CC1108932852E",
      "cover": "../../public/images/English dot Works Beginner.png",
      "institute": "SENA",
      "source": "http://certificados.sena.edu.co"
    },
    {
      "id": 65,
      "title": "Conprensino y produccion de texos",
      "type": "Academia Online",
      "year": "2012",
      "duration": "60 Hs Valida Certificado 922600288571CC1108932852E",
      "cover": "../../public/images/Conprensino y produccion de texos.png",
      "institute": "SENA",
      "source": "http://certificados.sena.edu.co"
    }   
  ]
}

const store = createStore(reducer, initialState)

ReactDOM.render(
  
  <Provider store = {store}>
    <App />
  </Provider>, 
  document.getElementById('app')

)