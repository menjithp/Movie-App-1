import React from 'react'
import { Provider } from 'react-redux'
import { render as rtlRender } from '@testing-library/react'
import {
  configureStore,
} from '@reduxjs/toolkit'

// import your reducers
import upcoming_movie_list_reducer_slice from '../../store/slice'

function render(ui, options) {
  const { preloadedState } = options 

  const store =
    configureStore({
      reducer: {
        upcoming_movie_list_reducer:upcoming_movie_list_reducer_slice,
      },
      preloadedState,
    })

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }