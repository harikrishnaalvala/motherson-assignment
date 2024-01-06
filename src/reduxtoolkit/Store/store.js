import {configureStore} from '@reduxjs/toolkit'
import projectSlice from '../Reducer/projectSlice'

export const store = configureStore({
  reducer: {
    project: projectSlice,
  },
})
