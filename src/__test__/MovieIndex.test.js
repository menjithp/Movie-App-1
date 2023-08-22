import {screen,render, waitFor,act, fireEvent} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import MovieIndex from '../movie_mod'
import {store} from '../store/store'
import { Provider } from 'react-redux'

describe('movie index component test',()=>{
    test('testing index component of index component',async()=>{
        const {container}=await render(
            <Provider store={store}>
                 <MemoryRouter>
                    <MovieIndex />
                </MemoryRouter>
            </Provider>
        )
        
        await waitFor(()=>{
            const ele= container.querySelectorAll(".movie-card")
            expect(ele).toHaveLength(20)
        })
       
        expect(await screen.findAllByTestId("movie-card")).toHaveLength(20)
        })
})



describe('load-more-button',()=>{
    test('fetch more checking',async()=>{
        const {container}=render(
            <Provider store={store}>
                 <MemoryRouter>
                    <MovieIndex />
                </MemoryRouter> 
                </Provider>  )

       const loadbutton=await screen.findByTestId("load-more")
       expect(loadbutton).toBeInTheDocument()
       let moviecards=await screen.findAllByTestId("movie-card")
       expect(moviecards).toHaveLength(20)

       
        fireEvent.click(loadbutton)
        await waitFor(async()=>{
            let movieCards = screen.getAllByTestId('movie-card');
            expect(movieCards).toHaveLength(40)
        })

        fireEvent.click(loadbutton)
        await waitFor(async()=>{
            let movieCards = screen.getAllByTestId('movie-card');
            expect(movieCards).toHaveLength(60)
        })



    })
})
