import React from 'react'

const Projects = ({photo,title,description,js,tail,react}) => {

  return (
    <div>
      <img src={photo} alt="image" />
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h1>Built With:</h1>
      <img src={js} alt="javascript" />
      <img src={tail} alt="tailwind" />
      <img src={react} alt="react" />
    </div>
  )
}

export default Projects
