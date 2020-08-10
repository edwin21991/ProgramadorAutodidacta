import React from 'react'
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = ({title, type, year, duration, cover, institute, source}) =>(
  
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title}  />
    <div className="carousel-item__details">
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">{`Duración: ${duration}`}</p>
      <p className="carousel-item__details--subtitle">{`Terminado En: ${year}`}</p>
      <p className="carousel-item__details--subtitle">{`Realizado: ${type}`}</p>
      <p className="carousel-item__details--subtitle">{`Instituto: ${institute}`}</p>
    </div>
  </div>
)

export default CarouselItem