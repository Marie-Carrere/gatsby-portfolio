import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import projectImage from '../assets/site1.png'

const SecondPage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Projects</h1>
        <p className="content has-text-centered">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore velit ex repellendus magni rem perspiciatis, laborum asperiores enim voluptates vitae voluptatibus explicabo laudantium nulla suscipit harum, obcaecati nisi quae placeat.
        </p>
      </div>
      <div className="columns is-centered">
        <div className="column is-half">
          <a href="https://bit.ly/2q6Df0Q">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-96x96">
                      <img src={projectImage} alt="project" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-size-5-desktop is-size-6-touch">
                      React Coin
                    </p>
                    <p className="subtitle is-size-5-desktop is-size-6-touch">
                      Cryptocurrency news website
                    </p>
                    <div className="tags">
                      <span className="tag">React</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </Layout>
)

export default SecondPage
