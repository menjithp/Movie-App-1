import { configureStore } from '@reduxjs/toolkit'
import upcoming_movie_list_reducer_slice from './slice'

export const store = configureStore({
  reducer: {
    upcoming_movie_list_reducer:upcoming_movie_list_reducer_slice
  },
})
