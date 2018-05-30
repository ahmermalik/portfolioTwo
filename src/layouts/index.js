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
            <a className="link dib mr3-ns mr0 hover-red" target='blank' href='/rezsample.pdf'>Resume</a>
          </div>
        </div>
        </div>
      </nav>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Ahmer Malik - Full Stack Web Developer"
      link={[
          { rel: 'apple-touch-icon', sizes: '57x57', href: 'favicon/apple-icon-57x57.png' },
          { rel: 'apple-touch-icon', sizes: '60x60', href: 'favicon/apple-icon-60x60.png' },
          { rel: 'apple-touch-icon', sizes: '72x72', href: 'favicon/apple-icon-72x72.png' },
          { rel: 'apple-touch-icon', sizes: '76x76', href: 'favicon/apple-icon-76x76.png' },
          { rel: 'apple-touch-icon', sizes: '114x114', href: 'favicon/apple-icon-114x114.png' },
          { rel: 'apple-touch-icon', sizes: '120x120', href: 'favicon/apple-icon-120x120.png' },
          { rel: 'apple-touch-icon', sizes: '144x144', href: 'favicon/apple-icon-144x144.png' },
          { rel: 'apple-touch-icon', sizes: '152x152', href: 'favicon/apple-icon-152x152.png' },
          { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-icon-180x180.png' },
          { rel: 'icon', type:'image/png', sizes: '192x192' , href: 'favicon/android-icon-192x192.png' },
          { rel: 'icon', type:'image/png', sizes: '32x32', href: 'favicon/favicon-32x32.png' },
          { rel: 'icon', type:'image/png', sizes: '96x96', href: 'favicon/favicon-96x96.png' },
          { rel: 'icon', type:'image/png', sizes: '16x16', href: 'favicon/favicon-16x16.png' },
          { rel: 'manifest', href: 'favicon/site.webmanifest.json'}
      ]}
      meta={[
        { name: 'description', content: 'Web Developer based in Austin/Houston. Creatively resolving problems & building amazing user experiences, specialising in Mobile & Web development' },
        { name: 'keywords', content: 'Full Stack Developer,Finance Software, Fintech, Blockchain Developer, Ethereum Developer, Stock, Trading,, Ahmer Malik, UI/UX, Back End Developer, Front End Design, User Experiences Design, Austin, Houston, Dallas, New York City, San Francisco, HTML, CSS, React, iOS, Andriod, Mobile, Web, Sketch, Prototyping, Web development, Responsive Design, User Testing, Mobile Apps, Front-end Development, Ahmer, Hammer Time, Malik, Tech' },
        { name: 'og:type', content: 'profile' },
        { name: 'og:title', content: 'Ahmer Malik - Freelancer Web Developer' },
        { name: 'og:description', content: 'Web Developer based in Austin/Houston. Creatively resolving problems & building amazing user experiences, specialising in Mobile & Web development' },
        { name: 'og:url', content: 'https://ahmermalik.com/' },
        { name: 'og:image', content: 'https://ahmermalik.com/images/cryptotistics.png' },
        { name: 'profile:first_name', content: 'Ahmer' },
        { name: 'profile:last_name', content: 'Malik' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@' },
        { name: 'twitter:site', content: '@' },
        { name: 'twitter:title', content: 'Ahmer Malik - Full Stack Web Developer' },
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
