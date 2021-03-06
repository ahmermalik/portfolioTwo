import React from "react"
import Landing from '../components/Landing.js'
import Experience from '../components/Experience.js'
import Info from '../components/Info.js'
import Work from '../components/Work.js'
import Footer from '../components/Footer.js'
import Playground from '../components/Playground.js'
import Contact from '../components/Contact.js'
import Skills from '../components/Skills.js'

const IndexPage = () =>
    <div>
      <Landing/>
      <Skills/>
      <Work/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>

export default IndexPage
