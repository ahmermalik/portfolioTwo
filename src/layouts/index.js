import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './index.css'


const Header = () =>

   <nav className='w-100' >
    <div className='mw8 db center'>
        <div className="dt-l w-100 border-box pa3 ph0-l pt3">
          <Link className="db dtc-l v-mid link hover-red tc tl-l mb2 mb0-l f4" to="/" title="Home">Ahmer Malik</Link>
          <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
            <a className="link dib mr3-ns mr0 hover-red" target='blank' href="http://ahmer.portfolio/">Digital Résumé</a>
          </div>
        </div>
        </div>
      </nav>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Ahmer Malik - Full Stack Web Developer"
      link={[
        { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-touch-icon.png'},
        { rel: 'icon', sizes: '32x32', href: 'favicon/favicon-32x32.png'},
        { rel: 'icon', sizes: '16x16', href: 'favicon/favicon-16x16.png'},
        ]}
      meta={[
        { name: 'description', content: 'Digital Product Designer based in London. Creatively resolving problems & building amazing user experiences, specialising in Mobile & Web design' },
        { name: 'keywords', content: 'Digital Product Design, Ahmer Malik, UI/UX, User Interface Design, User Experiences Design, London, Europe, HTML, CSS, React, iOS, Andriod, Mobile, Web, Sketch, Prototyping, Web development, Responsive Design, User Testing, Mobile Apps, Interaction Design, Front-end Development, Digital Product Design, Jimmy, Jimi, Tech' },
        { name: 'og:type', content: 'profile' },
        { name: 'og:title', content: 'Ahmer Malik - Freelancer Web Developer' },
        { name: 'og:description', content: 'Web Developer based in Austin/Houston. Creatively resolving problems & building amazing user experiences, specialising in Mobile & Web development' },
        { name: 'og:url', content: 'https://ahmermalik.com/' },
        { name: 'og:image', content: 'https://jciclitira.com/images/preview.png' },
        { name: 'profile:first_name', content: 'Ahmer' },
        { name: 'profile:last_name', content: 'Malik' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@' },
        { name: 'twitter:site', content: '@' },
        { name: 'twitter:title', content: 'Ahmer Malik - Freelance Web Developer' },
        { name: 'twitter:description', content: 'Web Developer based in Austin/Houston. Creatively resolving problems & building amazing user experiences, specialising in Mobile & Web development' },
        { name: 'twitter:image', content: '#' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
