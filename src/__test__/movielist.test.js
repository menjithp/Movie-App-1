import {screen,render} from '@testing-library/react'
import { MemoryRouter} from 'react-router-dom'
import MovieList from '../movie_mod/movie_comp/movie_list'
import response from '../response/response1.json'
import {ContextProvider} from '../App'

const initialState = {
    filtered_upcoming_movies:response,
    error:"",
    all_upcoming_movies:response,
    page:"list_page",
    isLoading:false,
    page_no:1,
    input:null,
    source_data:{[response.page]:response},
    total_pages:response.total_pages
  }

describe('Movielist component rendering',()=>{
    test('check 20 cards there',()=>{
       const {container}= render(
                <ContextProvider teststate={initialState}>
                <MemoryRouter>
                    <MovieList/>
                </MemoryRouter>
                </ContextProvider>
       )
       const moviecards=container.querySelectorAll(".movie-card")
       expect(moviecards).toHaveLength(20)
    })
})



//Integration testing .........
