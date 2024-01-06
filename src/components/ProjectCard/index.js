import React from 'react'
import './index.css'

const ProjectCard = ({title, description, image, webapp, isCheck}) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      {isCheck ? (
        <div className="d-flex justify-content-center align-items-center col-10 col-md-8 shadow m-3 main card-1">
          <div className="p-2 col-7 content">
            <h1 className="project-heading">{title}</h1>
            <p>{description}</p>
            <button className="view-button p-2">
              <a href={webapp}>View Project</a>
            </button>
          </div>
          <div className="col-5 img-cls">
            <img src={image} className="image" />
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center col-11 col-md-8 shadow m-3 main card-1">
          <div className="col-5 p-2">
            <img src={image} className="image" />
          </div>
          <div className="col-7 ml-5 m-1">
            <h1 className="project-heading">{title}</h1>
            <p>{description}</p>
            <button className="view-button p-2">
              <a href={webapp}> View Project</a>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
