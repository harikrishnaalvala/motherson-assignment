import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {add} from '../../reduxtoolkit/Reducer/projectSlice'
import './index.css'

const About = () => {
  const [title, setTitle] = useState('')
  const [description, setDes] = useState('')
  const [webapp, setWebApp] = useState('')
  const dispatch = useDispatch()

  const addProject = e => {
    e.preventDefault()
    const data = {
      title,
      description,
      webapp,
      github: '',
      image:
        'https://img.freepik.com/free-vector/people-starting-business-project_23-2148866842.jpg?w=996&t=st=1704443645~exp=1704444245~hmac=2df4ac2c4f5aeb9374257843c84fdb4fa783f7a581c26c0d4d3d1ce7fcbb2fb2',
    }
    console.log('data', data)
    dispatch(add(data))
    setDes('')
    setTitle('')
    setWebApp('')
  }
  return (
    <div id="about" className="">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-9 col-md-5 col-lg-5 d-flex flex-column justify-content-center">
          <h3 className="text-warning ux">UI/UX Designer</h3>
          <h1 className="text-dark title ">
            Hello my name is Harikrishna Alwala
          </h1>
          <h3 className="para">
            I am a passionate and creative front-end developer dedicated to
            crafting exceptional web experiences. With a strong foundation in
            web technologies, a keen eye for design, and a commitment to
            delivering high-quality user interfaces, I bring a unique blend of
            skills to every project.
          </h3>
          <div className="d-flex justify-content-center">
            <button className="btn btn-warning m-2 p-2" href="#projects">
              Projects
            </button>
            <button className="btn btn-light m-2 p-2">LinkedIn</button>
          </div>
        </div>
        <div className="col-5 col-md-4 col-lg-5 bg-warning d-fex justify-content-centeralign-items-center  p-2">
          <img
            src="https://res.cloudinary.com/dmdr9a99a/image/upload/v1704434115/image_tntgwc.png"
            className="w-100"
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="col-8 col-md-7 col-lg-8 mt-5 ml-5 d-flex flex-column justify-content-center align-items-center">
            <h1 className="add-project">Add Project</h1>
            <form onSubmit={addProject}>
              <div>
                <label>Project Name</label>
                <input
                  type="text"
                  className="form-control w-100"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label>Project Link</label>
                <input
                  type="text"
                  className="form-control"
                  value={webapp}
                  onChange={e => setWebApp(e.target.value)}
                />
              </div>
              <div>
                <label>Description</label>
                <textarea
                  rows="6"
                  cols="70"
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={e => setDes(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-end p-2">
                <button
                  className="btn btn-warning m-2 add-button"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
