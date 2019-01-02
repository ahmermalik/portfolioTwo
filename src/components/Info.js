import React from 'react'
import Title from './Title'


class Info extends React.Component {
  render() {
    return (
<section>
<div className="pv2 mw8 mb4 db center ph0-ns ph2">
<div className='pl2'>
<Title text='Recommendation'/>
</div>
<div className='w-100 dib v-top ph2'>
<p className="f5 f4-m lh-copy db mt0">Ahmer is superlative. He is the kind of product you obtain when you mix hard work, talent, humility, dedication and continuous self-improvement. I'm sure Ahmer will shine and do well in anything he tries to do, but when it comes to design he has attributes difficult to find all together: Apart from his design background, Ahmer experience goes beyond design having experience with web and mobile development, which gives him and holistic understanding on the matter.</p>
<div className='mt4 pt2'>
<cite className="f6 ttu tracked secondary-text fs-normal">Ashar Malik, <br /> <br /> Lead developer at XX</cite>
</div>
</div>
<div className='w-100 dib ph2 mt5'>
<p className="f5 f4-m lh-copy db">Ahmer is the kind of developer. He is not afraid of learning new technologies (like vue or react) quickly and he is always using the best tools on the market and constantly researching new ones. His approach is simple, yet elegant. Asset to any team.</p>
<cite className="f6 ttu tracked secondary-text fs-normal">Juan Pablo <br /> <br /> Lead developer at XX</cite>
</div>
</div>
</section>
    )
  }
}
export default Info
