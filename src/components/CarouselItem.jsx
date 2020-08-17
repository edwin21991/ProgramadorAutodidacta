import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setFavorite, deleteFavorite } from '../actions'
import '../assets/styles/components/CarouselItem.scss'
import Favorite from '../assets/static/favorite.gif'
import Delete from '../assets/static/delete.gif'

const CarouselItem = (props) =>{
  
  const {id, title, type, year, duration, cover, institute, source, isList} = props
  
  const handleSetFavorite = () =>{
    props.setFavorite({
        id, title, type, year, duration, cover, institute, source
      })
  }

  const handleDeleteFavorite = (itemId) =>{
    props.deleteFavorite(itemId)
  }
  return(  
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title}  />
      
      <div className="carousel-item__details">
        <p className="carousel-item__details--title">
          {`${title}   `}
          
          {isList ? 
            <img className="carousel-item__img" src={Delete} alt="Eliminar" onClick={()=>handleDeleteFavorite(id)}/> 
            :<img className="carousel-item__img" src={Favorite} alt="favorito" onClick={handleSetFavorite}/>
          }Fav...
        </p>
        <p className="carousel-item__details--subtitle">{`Duración: ${duration}`}</p>
        <p className="carousel-item__details--subtitle">{`Terminado En: ${year}`}</p>
        <p className="carousel-item__details--subtitle">{`Realizado: ${type}`}</p>
        <p className="carousel-item__details--subtitle">{`Instituto: ${institute}`}</p>        
      </div>
    </div>
  )
}

CarouselItem.propTypes = {

  title: PropTypes.string, 
  type: PropTypes.string, 
  year: PropTypes.string, 
  duration: PropTypes.string, 
  cover: PropTypes.string, 
  institute: PropTypes.string, 
  source: PropTypes.string,

}

const mapDisptchToProps = {
  setFavorite,
  deleteFavorite,
}

export default connect(null, mapDisptchToProps)(CarouselItem)









