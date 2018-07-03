import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js'
import CaseStudyImg from '../components/CaseStudyImg'
import Footer from '../components/Footer'



const Suggestv = () =>
<div className='pt5'>
<CaseStudyAbout
about='Cryptotistics utilizes an external API to gather and update crypto currency prices '
role='My role was to develop the backend architecture and provide guidelines for frontend design and how data is displayed. '
clients='Derp'
job='UI/UX Research, Wireframing,  UI/UX Design & Front-end development'
/>
<section className='mw8 center'>
  <h1 className='fw4 pv4 ma0 ph0-ns ph2'>Platform Design</h1>
  <CaseStudyImg img='images/suggestv/Search.png'/>
  <CaseStudyImg  img='images/suggestv/Search-onclick.png'/>
</section>
<Footer/>
</div>
export default Suggestv
