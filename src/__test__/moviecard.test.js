import {screen, render,fireEvent,waitFor} from '@testing-library/react'
import MovieCard from '../movie_mod/movie_comp/movie_card'
import { MemoryRouter,Routes,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from '../store/store'
import MovieDetail from '../movie_mod/movie_comp/movie_detail'
import response from '../response/response1.json'

let movie=response.results[0]
movie.page=1


describe('checking Movie card components',()=>{
    test('movie name & movie description & movie rating rendering',()=>{
        render(<Provider store ={store}>
                 <MemoryRouter>
                    <MovieCard data={movie} />
                </MemoryRouter>
            </Provider>
        )
        expect(screen.getByText(movie.title)).toBeInTheDocument()
        expect(screen.getByText(movie.overview)).toBeInTheDocument()
        expect(screen.getByText(movie.vote_average, { exact: false })).toBeInTheDocument()
    })

    test('movie card click',async()=>{
    
       const {container}= render(<Provider store ={store}>
            <MemoryRouter>
               <Routes initialEntries={["/"]}>
                <Route path="/:movie_title" element={<MovieDetail/>} />
                <Route path="/" element={<MovieCard data={movie} />}/>
               </Routes>
           </MemoryRouter>
       </Provider>)
       const moviecard= container.querySelector(".movie-card")
        fireEvent.click(moviecard)
        await waitFor(async()=>{
            expect(container.querySelector(".movie-detail-container")).toBeInTheDocument()
            expect(screen.getByText(movie.title)).toBeInTheDocument()
             })
       
    })
})