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
        <WorkTileOut title='Cryptotistics' info='Python, Tornado, JavaScript, PostgreSQL, OAuth, HTML5, CSS3, Bootstrap 4, jQuery, ' summary='Cryptotistics utilizes multiple APIs in order to deliver real time stats of various cryptocurrencies.' img='images/preview/cryptotistics.png' link='https://github.com/ahmermalik/cryptoCurrencyApp'/>
        <WorkTileOut title='Crypto Decryptd' info='JavaScript, Express, Node.js, PostgreSQL, HTML5, CSS3, Handlebars.js, Bootstrap' summary=' A React web app for a restaurant in Katy, TX. Features full menu and utilizes Yelp api to display current reviews.' img='' link='https://github.com/ahmermalik/podcast'/>

        <WorkTileOut title='Weather App' info='Python, JavaScript, Express, Node.js, PostgreSQL, HTML5, CSS3, Handlebars.js, Bootstrap' summary='Full Stack web app to review restaurants.' img='' link='https://github.com/ahmermalik/weatherApp'/>
        <WorkTileOut title='Chatroom App' info='JavaScript, Socket.IO, Express, Node.js, HTML5, CSS3, Handlebars.js, Bootstrap' summary='A socket io web app.' img='' link='https://github.com/ahmermalik/chatroomApp'/>

        <WorkTileOut title='Shish Kabob Cafe' info='HTML5, CSS3, Bootstrap 3, jQuery' summary='Web app utilizing HTML5, CSS3, Bootstrap 3, jQuery' img='/images/preview/shishkabob-min.png' link='https://github.com/ahmermalik/kabobCafe'/>
        <WorkTileOut title='Gas Price App' info='JavaScript, HTML5, CSS3, Bootstrap 4, jQuery' summary='Single page static web app to calculate cost savings variances and recommendation through payment channels.' img='' link='https://github.com/ahmermalik/ahmermalik.github.io'/>

            <h1 className='fw4'>Non-profit Projects</h1>
            <p className='mw7'>As a developer and a leader, it is important to share resources with individuals & organizations that'll utilize it to improve our world.</p>


        <WorkTileOut title='Houston Helps' info='Hack Houston 2017' summary='A fully responsive, mobile friendly app for case managers connect donors with those in need.' img='images/preview/houstonhelps.svg' link='https://github.com/ahmermalik/HoustonHelps'/>
        <WorkTileOut title="Water, Water Everywhere!" info="NASAs Space APP Challenge" summary='Sample Node.js application utilizing IBM Watson Visual Recognition Service to measure the chances of a flood occuring in a picture' img='images/preview/ibmwatson.svg' link='https://github.com/ahmermalik/visual-recognition-nodejs'/>

       </div>
    </section>
    )
  }
}
export default Work