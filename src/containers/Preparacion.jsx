import React from 'react'
import { connect } from 'react-redux'

import '../assets/styles/App.scss'
import RutaAprendizaje from '../components/RutaAprendizaje'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

const Home = ({Favorite, Universidad, DiplomadoJavaScript, DiplomadoReactJS, DiplomadoReactNative, Cursos}) => {

  return(    
    <div className="app">
      
      {Favorite.length > 0 &&
        <RutaAprendizaje title="Fovoritos">
          <Carousel>
            {Favorite.map(item =>
              <CarouselItem 
                key={item.id} 
                {...item}
                isList
              />
            )} 
          </Carousel>  
        </RutaAprendizaje>
      }
      
      <RutaAprendizaje title="Universidad">
        <Carousel>
          {Universidad.map(item =>
            <CarouselItem key={item.id} {...item} />
          )} 
        </Carousel>  
      </RutaAprendizaje>

       <RutaAprendizaje title="Diplomado en JavaScript">
        <Carousel>
          {DiplomadoJavaScript.map(item =>
            <CarouselItem key={item.id} {...item} />
          )} 
        </Carousel>  
      </RutaAprendizaje>
      
      <RutaAprendizaje title="Diplomado en ReactJS">
        <Carousel>
          {DiplomadoReactJS.map(item =>
            <CarouselItem key={item.id} {...item} />
          )} 
        </Carousel>   
      </RutaAprendizaje>

      <RutaAprendizaje title="Diplomado en React Native">
        <Carousel>
          {DiplomadoReactNative.map(item =>
            <CarouselItem key={item.id} {...item} />
          )} 
        </Carousel>    
      </RutaAprendizaje>
      <RutaAprendizaje title="Cursos">
        <Carousel>
          {Cursos.map(item =>
            <CarouselItem key={item.id} {...item} />
          )} 
        </Carousel>    
      </RutaAprendizaje>

    </div>
  )
}

const mapStateToProps = state =>{
  return{
    Favorite: state.Favorite,
    Universidad: state.Universidad,
    DiplomadoJavaScript: state.DiplomadoJavaScript,
    DiplomadoReactJS: state.DiplomadoReactJS,
    DiplomadoReactNative: state.DiplomadoReactNative,
    Cursos: state.Cursos,
  }
}
export default connect(mapStateToProps, null) (Home)










