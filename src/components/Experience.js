import React from 'react'
import Role from './Role'
import Title from './Title'



class Experience extends React.Component {
  render() {
    return (
<section>
<div className="mw8 db-ns dn center ph2 mt4">
<Title text='Experience'/>
    <div className='pt3 ph2'>
    <div className='dib w-third-ns w-100'>
    <Role jobTitle='Financial Analyst' employer='Emerson Electric' img='images/companies/Emerson.svg' link='https://crowdscores.com/'/>


    </div>
    <div className='dib w-third-ns w-100'>
    <Role jobTitle='Product designer' employer='Numilli' img='images/companies/Kickit.svg' link='http://numilli.surge.sh/'/>

    </div>

    <div className='dib w-third-ns w-100 v-top'>
    <Role jobTitle='Product designer' employer='YunoJuno' img='images/companies/yunoJuno-icon.svg' link='https://www.yunojuno.com/'/>


    </div>
</div>
    </div>
</section>
    )
  }
}
export default Experience
