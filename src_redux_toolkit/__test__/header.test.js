import {screen ,render,waitFor, fireEvent} from './utils/test-utils'
import Header from '../movie_mod/Header'
import { MemoryRouter,Routes,Route } from 'react-router-dom'
import {store} from '../store/store'
import response from '../response/response1.json'
import MovieDetail from '../movie_mod/movie_comp/movie_detail'
import MovieIndex from '../movie_mod/index'

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
describe('header component route "/" check',()=>{
    test('input element in the document',()=>{
       const{container}= render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>,{
      preloadedState: { upcoming_movie_list_reducer: initialState },
    })

    const input=screen.getByRole("textbox")
    expect(input).toBeInTheDocument()
    const movie_detail_things=container.querySelector(".movie-detail-things")
    expect(movie_detail_things).not.toBeInTheDocument()
    })
})

describe('header component route "/:movie_title"',()=>{
    test('/:movie_title',async()=>{
        const {container}=render(
            <MemoryRouter initialEntries={["/"]}>
                <Header/>
                <Routes>
                    <Route path="/" element={<MovieIndex/>} />
                    <Route path="/:movie_title" element={<MovieDetail/>}/>
                </Routes>

            </MemoryRouter>,{
      preloadedState: { upcoming_movie_list_reducer: initialState }}
        )
         const cards=await waitFor(()=>container.querySelector(".movie-card"))
         let movie_detail_thing=container.querySelector(".movie-detail-things")
         expect(movie_detail_thing).not.toBeInTheDocument()
         let search=screen.getByRole("textbox")
         expect(search).toBeInTheDocument()
        fireEvent.click(cards)        
        search=screen.queryByRole("textbox")
         expect(search).not.toBeInTheDocument()
         movie_detail_thing=container.querySelector(".movie-detail-things")
         expect(movie_detail_thing).toBeInTheDocument()

    })
})