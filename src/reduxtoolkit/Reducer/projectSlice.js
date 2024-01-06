import {createSlice} from '@reduxjs/toolkit'

let initialState = [
  {
    title: 'Jobby App',
    description:
      'Jobby App marks my initial React frontend assignment, where I gained insights into authentication, routing, and the lifecycle methods of components. [userCredintials: {username: 'rahul', password: 'rahul@2021'}]',
    image:
      'https://res.cloudinary.com/dhaj9wlmu/image/upload/v1704013619/jobby-app-jobs-success-lg-output-v0_zk4y1q.png',

    github: 'https://github.com/harikrishnaalvala/jobby-app.git',
    webapp: 'harijobapp.ccbp.tech',
  },
  {
    title: 'Jobby App',
    description:
      'Jobby App marks my initial React frontend assignment, where I gained insights into authentication, routing, and the lifecycle methods of components. [userCredintials: {username: 'rahul', password: 'rahul@2021'}]',
    image:
      'https://res.cloudinary.com/dhaj9wlmu/image/upload/v1704013619/jobby-app-jobs-success-lg-output-v0_zk4y1q.png',

    github: 'https://github.com/harikrishnaalvala/jobby-app.git',
    webapp: 'harijobapp.ccbp.tech',
  },
]

const projectSlice = createSlice({
  name: 'projects',
  initialState: {projects: initialState},
  reducers: {
    add: (state, action) => {
      console.log('action', action)
      if (action.payload.title && action.payload.description) {
        state.projects = [...state.projects, {...action.payload}]
      }
    },
  },
})

export const {add} = projectSlice.actions
export default projectSlice.reducer
