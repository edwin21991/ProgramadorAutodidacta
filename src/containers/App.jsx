import React from 'react'
import '../assets/styles/App.scss'
import Header from '../components/Header'
import Menu from '../components/Menu'
import RutaAprendizaje from '../components/RutaAprendizaje'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

const App = () => (
  
  <div className="app">

    <Header />
    <Menu />
    <RutaAprendizaje title="Universidad">
      <Carousel>
        <CarouselItem />
        <CarouselItem /> 
        <CarouselItem />
        <CarouselItem />  
        <CarouselItem />
        <CarouselItem />     
      </Carousel>  
    </RutaAprendizaje>

    <RutaAprendizaje title="Diplomado en JavaScript">
      <Carousel>
        <CarouselItem />
        <CarouselItem /> 
        <CarouselItem />
        <CarouselItem />  
        <CarouselItem />
        <CarouselItem />   
      </Carousel>  
    </RutaAprendizaje>

    <RutaAprendizaje title="Diplomado en React Native">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />  
        <CarouselItem />
        <CarouselItem />    
      </Carousel>  
    </RutaAprendizaje>

    <RutaAprendizaje title="Cursos">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />  
        <CarouselItem />
        <CarouselItem />    
      </Carousel>  
    </RutaAprendizaje>

    <Footer />

  </div>
)

export default App