import '@testing-library/jest-dom';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import response1 from './response/response1'
import response2 from './response/response2'
import response3 from './response/response3'
import { MOVIE_API } from './properties';

const server = setupServer(
  // Describe the requests to mock.
  rest.get(MOVIE_API, (req, res, ctx) => {


    console.log("server hitted")
    let response;
    const page = +req.url.searchParams.get('page')
    if (page===1)response=response1
    else if (page===2)response=response2
    else if(page===3)response=response3

    return res(
      ctx.json(response),
    )
  }),
)

beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen()
})

afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close()
})
