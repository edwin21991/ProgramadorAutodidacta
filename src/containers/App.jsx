import React, { useState, useEffect } from 'react'
import '../assets/styles/App.scss'
import Header from '../components/Header'
import Menu from '../components/Menu'
import RutaAprendizaje from '../components/RutaAprendizaje'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

const App = () => {
  
  const [certificados, setCertificados] = useState({
      Universidad: [],
      DiplomadoJavaScript: [],
      DiplomadoReactJS: [],
      DiplomadoReactNative: [],
      Cursos: []
  })

  useEffect (()=>{
    fetch('http://localhost:3000/initalState')
      .then(response => response.json())
      .then(data => setCertificados(data))
  }, [])

  console.log(certificados)
  return(    
    <div className="app">

      <Header />
      <Menu />
      <RutaAprendizaje title="Universidad">
        <Carousel>
          {certificados.Universidad.map(item =>
            <CarouselItem key={item.id} {...item} />
          )} 
        </Carousel>  
      </RutaAprendizaje>

       <RutaAprendizaje title="Diplomado en JavaScript">
        <Carousel>
          {certificados.DiplomadoJavaScript.map(item =>
            <CarouselItem key={item.id} {...item} />
          )} 
        </Carousel>  
      </RutaAprendizaje>
      
      <RutaAprendizaje title="Diplomado en ReactJS">
        <Carousel>
          {certificados.DiplomadoReactJS.map(item =>
            <CarouselItem key={item.id} {...item} />
          )} 
        </Carousel>   
      </RutaAprendizaje>

      <RutaAprendizaje title="Diplomado en React Native">
        <Carousel>
          {certificados.DiplomadoReactNative.map(item =>
            <CarouselItem key={item.id} {...item} />
          )} 
        </Carousel>    
      </RutaAprendizaje>
      <RutaAprendizaje title="Cursos">
        <Carousel>
          {certificados.Cursos.map(item =>
            <CarouselItem key={item.id} {...item} />
          )} 
        </Carousel>    
      </RutaAprendizaje>

      <Footer />
    </div>
  )
}
export default App