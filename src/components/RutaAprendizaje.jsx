import React from 'react'
import '../assets/styles/components/RutaAprendizaje.scss'

const RutaAprendizaje = ({ children, title }) =>(
  <div className='ruta'>
    <h3 className="ruta__title">{title}</h3>
    {children}
  </div>
)

export default RutaAprendizaje
