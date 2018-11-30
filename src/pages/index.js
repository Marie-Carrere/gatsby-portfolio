import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import profileImage from '../assets/profile.jpeg'

const socialMedias = [
  { icon: 'fa-github-square', link: 'https://github.com/Marie-Carrere' },
  { icon: 'fa-linkedin', link: 'https://www.linkedin.com/in/marie-carrere' }
];

const IndexPage = () => (
  <Layout>
    <div className="container">
      <figure className="photo image is-128x128">
        <img className="is-rounded" src={profileImage} alt="Marie Carrere" />
      </figure>
      <h1 className="title has-text-centered">Marie Carrere</h1>
      <h2 className="subtitle has-text-centered">Full Stack Developer</h2>
    </div>
    <div className="has-text-centered">
      {socialMedias.map(socialMedia => (
        <a 
          href={socialMedia.link} 
          key={socialMedia.icon} 
          aria-label={socialMedia.icon}
        >
          <span className="icon is-large">
            <i className={`fab fa-2x ${socialMedia.icon}`} />
          </span>
        </a>
      ))}
    </div>
    <section className="section is-size-4 is-size-5-touch">
      <div className="container content">
        <h4 className="title">
          Hello, I'm Marie Carrere {''}
          <span role="img" aria-label="waving">👋</span>
        </h4>
        <p>
          Full Stack Developer
        </p>
        <p>
          JavaScript | React | Node
        </p>
        <p>
          See more <Link to="/projects">Projects</Link>
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
