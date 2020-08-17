import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Preparacion from '../containers/Preparacion'
import Portafolio from '../containers/Portafolio'
import SobreMi from '../containers/SobreMi'
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout'

const App = () =>(

  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/preparacion" component = {Preparacion} />
        <Route exact path = "/portafolio" component = {Portafolio} />
        <Route exact path = "/sobremi" component = {SobreMi} />
        <Route component = {NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App