import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'

const Layout = ({ children })=>(
  <div className="App">
    <Header />
    <Menu />
    {children}
    <Footer />
  </div>
)

export default Layout