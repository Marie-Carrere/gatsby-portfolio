import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
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
