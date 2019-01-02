import React from 'react'
import Title from './Title'
import PropTypes from 'prop-types';



class Skills extends React.Component {
    render() {
        return (

            <section>
                <div className="mw8 db-ns  dn center ph2 mt4">
                    <Title text='Technology'/>

                    <div className='pt3 ph2'>

                <h2 className='fw4 mt1 f3 mb2'>Front End</h2>
                        <div className='w-100 pv2 '>
                        <img className='container ph3 grow' src={"images/companies/react.svg"} />
                        <img className='container ph3 grow' src={"images/companies/Gatsby.svg"} />
                        <img className='container ph3 grow' src={"images/companies/html5.svg"} />
                       
                        </div>
                    <h2 className='fw4 mt1 f3 mb2'>Back End</h2>
                        <div className='w-100 pv2 '>
                            <img className='container ph3 grow' src={"images/companies/nodejs.svg"} />
                            <img className='container ph3 grow' src={"images/companies/python.svg"} />
                            <img className='container ph3 grow' src={"images/companies/postgresql.svg"} />
                        </div>

                    <h2 className='fw4 mt1 f3 mb2'>Tools</h2>
                    <div className='w-100 pv2'>
                        <img className='container ph3 grow' src={"images/companies/visualstudio.svg"} />
                        <img className='container ph3 grow' src={"images/companies/aws.svg"} />
                        <img className='container ph3 grow' src={"images/companies/google.svg"} />
                    </div>



                    </div>

</div>

            </section>
        )
    }
}
export default Skills