import {screen,render, waitFor,act, fireEvent, getAllByTestId} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import MovieIndex from '../movie_mod'
import {store} from '../store/store'
import { Provider } from 'react-redux'


//jest.mock('intersection-observer');

describe('movie index component test',()=>{
    test('testing index component of index component',async()=>{
        const {container}=await render(
            <Provider store={store}>
                 <MemoryRouter>
                    <MovieIndex />
                </MemoryRouter>
            </Provider>
        )
        
        const ele=screen.getByTestId('scrolling-container')
        
  await act(async() => {
    await fireEvent.scroll(window, { target: { scrollY: 300 } });
  });

  const dataElement = await screen.findAllByTestId("movie-card");
  console.log("dataElement",dataElement.length)

//expect(dataElement).toHaveLength(40)
       
})
})
