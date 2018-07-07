import React from 'react'
import Title from './Title'
import WorkTile from './WorkTile'
import WorkTileOut from './WorkTileOut'


class Work extends React.Component {
  render() {
    return (
    <section id='Portfolio'>
        <div className='mw8 mt5 center db ph0-ns ph2'>
        <Title text='Portfolio'/>
        <WorkTileOut title='Cryptotistics' info='Python, Tornado, JavaScript, PostgreSQL, OAuth, jQuery ' summary='Crypto currency portfolio web app. Utilizing a complex database, allows multiple users to create real time portfolios.' img='images/preview/cryptotistics.png' link='https://github.com/ahmermalik/cryptoCurrencyApp'/>
        <WorkTileOut title='Crypto-currency Market Report' info='Node.js, PostgreSQL, Express, Chart.js ' summary='Back end application to analyze price volatility utilizing historic data. ' img='/images/preview/comingsoon.png' link='https://github.com/ahmermalik/tools'/>

        <WorkTileOut title='Shish Kabob Cafe' info='JavaScript, Google Analytics, HTML5, CSS3, jQuery' summary='Created a responsive, mobile friendly web app for a local restaurant, and setup delivery system.' img='/images/preview/shishkabob-min.png' link='https://github.com/ahmermalik/kabobCafe'/>
        <WorkTileOut title='Chatroom App' info='Socket.IO, JavaScript, Express, Node.js, HTML5, Handlebars.js' summary='Socket.IO web app with designated chat rooms.' img='/images/preview/comingsoon.png' link='https://github.com/ahmermalik/chatroomApp'/>

        <WorkTileOut title='Weather App' info='Python, PostgreSQL, Jinja2' summary='Web application utilize weather api to render data for various cities.' img='/images/preview/weathapp-min.png' link='https://github.com/ahmermalik/weatherApp'/>
        <WorkTileOut title='Gas Price App' info='HTML5, CSS3, jQuery, JavaScript' summary='Single page static web app to calculate cost variances which produces automated recommendation of payment channel.' img='/images/preview/gasprice-min.png' link='https://github.com/ahmermalik/ahmermalik.github.io'/>

            <h1 className='fw4'>Non-profit Projects</h1>
            <p className='mw7'> As a developer and leader, I believe it is vital to share resources with individuals and organizations that will carry the world forward.</p>

        <WorkTileOut title='Houston Helps' info='Hack Houston 2017' summary='A fully responsive, mobile friendly app for case managers connect donors with those in need.' img='images/preview/houstonhelps.svg' link='https://github.com/ahmermalik/HoustonHelps'/>
        <WorkTileOut title="Water, Water Everywhere!" info="NASA Space APP Challenge" summary='Sample Node.js application utilizing IBM Watson Visual Recognition Service to measure the chances of a flood occuring in a picture.' img='images/preview/ibmwatson.svg' link='https://github.com/ahmermalik/visual-recognition-nodejs'/>

       </div>
    </section>
    )
  }
}
export default Work