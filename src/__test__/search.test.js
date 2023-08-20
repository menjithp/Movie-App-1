import {screen,render, waitFor,act} from './utils/test-utils'
import Search from '../movie_mod/Header/search'
import response from '../response/response1.json'
import Movie_list from '../movie_mod/movie_comp/movie_list'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

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

describe('search input check',()=>{
    test('test filtering logic',async()=>{

        const {container}=render(     
            <MemoryRouter>
                <Search />
                <Movie_list/>
            </MemoryRouter>
           ,{
      preloadedState: { upcoming_movie_list_reducer: initialState },
    }  
        )
        
        const input=screen.getByRole("textbox")
       await act(()=>userEvent.type(input, "opp"))

         const moviecard_new=await waitFor(()=>container.querySelectorAll(".movie-card"))
         expect(moviecard_new).toHaveLength(1)
    })
})