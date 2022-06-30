import axios from "axios"
import { getAllProducts } from "./productsAPI"

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('productsAPI', () => {
  it('makes a get request to the /api/ endpoint', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({data: null})
    )

    await getAllProducts();

    const calledGetURL = mockedAxios.get.mock.calls[0][0];

    // expect(calledGetURL.endsWith('/api/').toBe(true));

  })
})