import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js'
import CaseStudyImages from '../components/CaseStudyImages.js'
import Footer from '../components/Footer'




const Shishkabob = () =>
    <div className='pt5'>
        <CaseStudyAbout
        about='Shish Kabob Cafe new and improved website makes it easy to quick to find menu items blah blah'
        role='My role consisted of developing a desktop and mobile friendly design in order to improve customer accessibility and restaurant revenue.'
        clients='Shish Kabob Cafe '
        job='Research restaurant websites, create a story about the owner, restaurant heritage and deliver an experience using the web app'
        />
<div className='ph0-ns'>
        <CaseStudyImages img='images/shishkabobcafe/' />

</div>
<Footer/>
    </div>
export default Shishkabob