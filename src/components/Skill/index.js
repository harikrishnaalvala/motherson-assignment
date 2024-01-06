import React from 'react'
import {skills} from '../../icons/icon'
import './index.css'

const Skill = () => {
  const skill = skills
  return (
    <div id="skills">
      <div className="d-flex flex-column justify-content-center align-items-center col-11 col-md-12">
        {skill.map((e, i) => (
          <div
            key={i}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <h1>
              <u className="underline1">{e.title}</u>
            </h1>
            <div className="d-flex justify-content-center flex-wrap">
              {e.skills.map((e, i) => (
                <div className="card-cont shadow m-4 p-2">
                  <img src={e.image} className="image1" />
                  <p className="text-center">
                    <strong>{e.name}</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill
