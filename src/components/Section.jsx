import React from 'react'
import '../assets/styles/components/Section.scss'

const Section = ({ children }) =>(
  
  <section className="section">
    <div className="section__container">
      {children}
    </div>
  </section>
)

export default Section