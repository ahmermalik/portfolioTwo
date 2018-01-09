import React from 'react'
import PlayTile from './PlayTile'
import PlayTileIn from './PlayTileIn'
import Title from './Title'



class Playground extends React.Component {
  render() {
    return (
<section className="center mw8 mt4 db ph0-ns ph2">
<Title text='Freebies'/>
<p className=' ma0 pa0 fw5 secondary-text'>Collection of random tools i've made availble for download</p>
<div className='pt3 db'>
<PlayTile  title='Resume' type='images/tools/js.svg' img='images/preview/cv.svg' link='https://github.com/james-ciclitira/resume'/>
<PlayTileIn  title='Gas Price Calculator' type='images/tools/css.svg' img='images/preview/gradient.svg' source='Gradient'/>
<PlayTileIn  title='Houston Helps' type='images/tools/sketch.svg' img='images/preview/weather.svg' source='Weather'/>

</div>
</section>
    )
  }
}
export default Playground

