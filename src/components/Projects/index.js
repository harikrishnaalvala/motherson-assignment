import React from 'react'
import {useSelector} from 'react-redux'
import ProjectCard from '../ProjectCard'
import './index.css'

const Projects = () => {
  const projectsData = useSelector(state => state.project.projects)
  return (
    <div id="projects">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="projects">
          <u className="underline ">PROJECTS</u>
        </h1>
        <div className="d-flex flex-column justify-content-center align-items-center m-2 mb-3">
          {projectsData.map((e, i) => (
            <div key={i}>
              {i % 2 === 0 ? (
                <ProjectCard
                  key={i}
                  title={e.title}
                  description={e.description}
                  image={e.image}
                  webapp={e.webapp}
                  isCheck={true}
                />
              ) : (
                <ProjectCard
                  key={i}
                  title={e.title}
                  description={e.description}
                  image={e.image}
                  webapp={e.webapp}
                  isCheck={false}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
