import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/card'
import projectImage from '../assets/site1.png'
import projectImage2 from '../assets/site2.png'



const projectCards = [
  {
    title: 'React Coins',
    description: 'Cryptocurrency price tracker website',
    link: 'https://bit.ly/2q6Df0Q',
    imageLink: projectImage,
    tags: ['React', 'API'],
  },
  {
    title: 'React Movie',
    description: 'React Movie is a website using The Movie Database API to display related information about movies',
    link: 'https://bit.ly/2PcZuRy',
    imageLink: projectImage2,
    tags: ['React', 'API'],
  },
];

const Projects = () => (
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
          {projectCards.map(projectCard => (
            <Card key={projectCard.title} {...projectCard} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Projects;
