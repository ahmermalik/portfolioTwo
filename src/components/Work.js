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
        <WorkTileOut title='Cryptotistics' info='Python, Tornado, JavaScript, PostgreSQL, OAuth, jQuery ' summary='Cryptocurrency portfolio web app. Utilizing a complex database, allows multiple users to create realtime portfolios.' img='images/preview/cryptotistics.png' link='https://github.com/ahmermalik/cryptoCurrencyApp'/>
        <WorkTileOut title='Crypto Analysis' info='Node.js, PostgreSQL, Express, ' summary=' Analyze crypto price movements utilize historic data ' img='/images/preview/comingsoon.png' link='https://github.com/ahmermalik/tools'/>

        <WorkTileOut title='Shish Kabob Cafe' info='HTML5, CSS3, jQuery, JavaScript' summary='Web app for a local restaurant.' img='/images/preview/shishkabob-min.png' link='https://github.com/ahmermalik/kabobCafe'/>
        <WorkTileOut title='Chatroom App' info='Socket.IO, JavaScript, Express, Node.js, HTML5, Handlebars.js' summary='A socket io web app with designated chatrooms.' img='/images/preview/comingsoon.png' link='https://github.com/ahmermalik/chatroomApp'/>

        <WorkTileOut title='Weather App' info='Python, PostgreSQL, Handlebars.js' summary='Web application utilize weather api to render data for various cities.' img='/images/preview/weathapp-min.png' link='https://github.com/ahmermalik/weatherApp'/>
        <WorkTileOut title='Gas Price App' info='HTML5, CSS3, jQuery, JavaScript' summary='Single page static web app to calculate cost variances which produces automated recommendation of payment channel.' img='/images/preview/gasprice-min.png' link='https://github.com/ahmermalik/ahmermalik.github.io'/>

            <h1 className='fw4'>Non-profit Projects</h1>
            <p className='mw7'>As a developer and a leader, it is important to share resources with individuals & organizations that'll utilize it to improve our world.</p>

        <WorkTileOut title='Houston Helps' info='Hack Houston 2017' summary='A fully responsive, mobile friendly app for case managers connect donors with those in need.' img='images/preview/houstonhelps.svg' link='https://github.com/ahmermalik/HoustonHelps'/>
        <WorkTileOut title="Water, Water Everywhere!" info="NASA Space APP Challenge" summary='Sample Node.js application utilizing IBM Watson Visual Recognition Service to measure the chances of a flood occuring in a picture' img='images/preview/ibmwatson.svg' link='https://github.com/ahmermalik/visual-recognition-nodejs'/>

       </div>
    </section>
    )
  }
}
export default Work