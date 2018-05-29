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
        <WorkTile title='Cryptotistics' info='Web app & responsive design' summary='Cryptotistics utilizes multiple APIs in order to deliver real time stats of various cryptocurrencies.' img='images/preview/cryptotistics.png' link='Suggestv'/>
        <WorkTile title='Crypto Decryptd' info='Responsive mobile app design' summary=' A React web app for a restaurant in Katy, TX. Features full menu and utilizes Yelp api to display current reviews.' img='images/preview/sishkabob123.png' link='/CrowdScores'/>

        <WorkTile title='Shish Kabob Cafe' info='Mobile app & atm design' summary='Bitcoin safe and easy. Numilli makes it easy to securely buy and sell bitcoin currency, on the go using a mobile application and ATMs.' img='images/preview/numilli.jpg' link='Numilli'/>
        <WorkTile title='Gas Price App' info='Web app design' summary='YunoJuno connects the best freelancers with great companies. Employers work directly with freelancers with YunoJuno managing contact and payment.' img='images/preview/yunojuno.jpg' link='YunoJuno'/>

        <WorkTileOut title='Restaurant Reviewer' info='Web app - design & development' summary='Web app showing the bitcoin ATM locations - under development' img='images/preview/numilli-site.jpg' link='http://numilli.surge.sh/'/>
        <WorkTile title='Chatroom App' info='Mobile app design' summary='Quidco is the number one cashback service. Partnering with retailers to help consumers earn cashback every year.' img='images/preview/quidco.jpg' link='Quidco'/>

        <h1 className='fw4'>Non-profit Projects</h1>
        <p className='mw7'>As a developer and a leader, it is important to share your abilities with organizations that may utilize it strategically to improve our world.</p>


        <WorkTileOut title='Houston Helps' info='Hack Houston 2017' summary='A fully responsive, mobile friendly app for case managers to connect donors to those in need.' img='images/preview/houstonhelps.svg' link='https://github.com/ahmermalik/HoustonHelps'/>
        <WorkTileOut title="Water, Water Everywhere!" info="NASAs Space APP Challenge" summary='Sample Node.js application utilizing IBM Watson Visual Recognition Service to measure the chances of a flood occuring in a picture' img='images/preview/ibmwatson.svg' link='https://github.com/ahmermalik/visual-recognition-nodejs'/>

       </div>
    </section>
    )
  }
}
export default Work