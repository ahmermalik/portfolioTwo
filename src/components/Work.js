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

        <WorkTileOut title='Chatroom App' info='React, Node.js, Socket.IO, Twilio, MongoDB, Express, Material UI' summary='A mobile first, responsive full stack web app Socket.IO application for web communication made for a local HVAC business.' img='/images/preview/chatapp2.png' link='https://github.com/ahmermalik/chatApp'/>
        <WorkTileOut title='HERC Wallet Scanner' info='React, IPFS, Metamask' summary='Front end web app to monitor token balances.' img='/images/preview/hercapp.png' link='https://github.com/ahmermalik/addHERCdapp'/>

        <WorkTileOut title='Nano Tracker' info='React, Node.js, PostgreSQL, Express' summary='Full stack app utilizing React to render public wallet address interface and Node.js to create, delete, and update balances. ' img='/images/preview/comingsoon.png' link='https://github.com/ahmermalik/nanoTrackerReact'/>

        <WorkTileOut title='Shish Kabob Cafe' info='JavaScript, Google Analytics, jQuery' summary='A mobile first, responsive web application for a local restaurant, and setup delivery system.' img='/images/preview/shishkabob-min.png' link='https://github.com/ahmermalik/kabobCafe'/>
        <WorkTileOut title='Cryptotistics' info='Python, Tornado, JavaScript, PostgreSQL, OAuth, jQuery ' summary='Crypto currency portfolio web app. Utilizing a complex database, allows multiple users to create real time portfolios.' img='images/preview/cryptotistics.png' link='https://github.com/ahmermalik/cryptoCurrencyApp'/>


        <WorkTileOut title='Weather App' info='Python, PostgreSQL, Jinja2' summary='Web application utilize weather api to render data for various cities.' img='/images/preview/weathapp-min.png' link='https://github.com/ahmermalik/weatherApp'/>
        <WorkTileOut title='Gas Price App' info='JavaScript, jQuery' summary='Single page static web app to calculate cost variances which produces automated recommendation of payment channel.' img='/images/preview/gasprice-min.png' link='https://github.com/ahmermalik/ahmermalik.github.io'/>

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