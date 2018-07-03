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
        <div className='dib w-half-ns w-100 v-top'>
            <Role jobTitle='Web Developer' employer='Kickit' img='images/companies/yunoJuno-icon.svg' link='https://thekickitapp.com/'/>
        </div>
        <div className='dib w-half-ns w-100'>
            <Role jobTitle='Financial Analyst' employer='Emerson Electric' img='images/companies/Emerson.svg' link='http://www.emerson.com/en-us'/>


    </div>

</div>
    </div>
</section>
    )
  }
}
export default Experience
