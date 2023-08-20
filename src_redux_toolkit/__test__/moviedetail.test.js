import {screen , render, waitFor,act} from '@testing-library/react'
import MovieDetail from '../movie_mod/movie_comp/movie_detail'
import { MemoryRouter,Router,Routes,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from '../store/store'
import response from '../response/response1.json'

let movie=response.results[0]

describe('movie detail rendering',()=>{
    test('movie detail check',async()=>{
        render(<Provider store={store}>
            <MemoryRouter initialEntries={["/"+ movie.title +"_page1"]}>
                <Routes>
                    <Route path="/:movie_title" element={<MovieDetail />} />
                </Routes>
            </MemoryRouter>
        </Provider>)

      //if we  use await findby method then api data will be loaded automatically
      /*if getby or querby then 
      await waitFor(async()=>await screen.findByTestId(movie.title,{exact:false})).toBeInTheDocument())
                                  or
      const waiter=()=>new Promise((resolve)=>setTimeout(resolve,100))
      await waiter()
      screen.findByTestId(movie.title,{exact:false})).toBeInTheDocument()

      */

        expect(await screen.findByText(movie.title,{exact:false})).toBeInTheDocument()
    })
})

