import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import profileImage from '../assets/profile.jpeg'

const IndexPage = () => (
  <Layout>
    <div className="container">
      <figure className="photo image is-128x128">
        <img className="is-rounded" src={profileImage} alt="Marie Carrere" />
      </figure>
      <h1 className="title has-text-centered">Marie Carrere</h1>
      <h2 className="subtitle has-text-centered">Full Stack Developer</h2>
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
          See more <Link to="/page-2">Projects</Link>
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
