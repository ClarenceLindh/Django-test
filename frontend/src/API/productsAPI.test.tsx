import axios, { AxiosResponse } from "axios";
import { Product, ProductObject } from "../components/productsSlice";
import { deleteProduct, getAllProducts, postProduct } from "./productsAPI";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("productsAPI", () => {
  it("makes a get request to the /api endpoint", async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: null })
    );

    await getAllProducts();

    const calledGetURL = mockedAxios.get.mock.calls[0][0];

    expect(calledGetURL.endsWith("/api")).toBe(true);
  });

  it("makes a post request to the /api endpoint", async () => {
    const product: Product = {
      id: 1,
      name: "Test product 1",
      price: 10,
    };

    const mockedResponse: AxiosResponse = {
      data: product,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    mockedAxios.post.mockResolvedValueOnce(() =>
      Promise.resolve(mockedResponse)
    );

    expect(axios.post).not.toHaveBeenCalled();
    const data = await postProduct(product);
    expect(axios.post).toHaveBeenCalled();
    await expect(getAllProducts()).resolves.toEqual(data);
  });

  // it("makes a delete request to the /api endpoint", async () => {
  //   const product: Product = {
  //     id: 1,
  //     name: "Test product 1",
  //     price: 10,
  //   };

  //   const mockedResponse: AxiosResponse = {
  //     data: product,
  //     status: 204,
  //     statusText: "OK",
  //     headers: {},
  //     config: {},
  //   };

  //   mockedAxios.delete.mockResolvedValueOnce(() =>
  //     Promise.resolve(mockedResponse)
  //   );

  //   expect(axios.delete).not.toHaveBeenCalled();
  //   const data = await deleteProduct(1);
  //   expect(axios.delete).toHaveBeenCalled();
  //   await expect(deleteProduct(1)).resolves.toEqual(data);
  // });

  it("should return list of products when calling getAllProducts", async () => {
    const products: Product[] = [
      {
        id: 1,
        name: "Test product 1",
        price: 10,
      },
      {
        id: 2,
        name: "Test product 2",
        price: 20,
      },
    ];

    const mockedResponse: AxiosResponse = {
      data: products,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(() =>
      Promise.resolve(mockedResponse)
    );

    expect(axios.get).not.toHaveBeenCalled();
    const data = await getAllProducts();
    expect(axios.get).toHaveBeenCalled();
    await expect(getAllProducts()).resolves.toEqual(data);
  });

  // it('rejects the returned promise with an error', async () => {
  //   const error = {
  //     message: 'Request failed with status code 401',
  //     response: {
  //       data: {
  //         detail: 'Fail bruh',
  //       },
  //       status: 401,
  //     },
  //   }

  //   mockedAxios.get.mockImplementationOnce(() => Promise.reject(error))

  //   await expect(getAllProducts()).rejects.toBeInstanceOf(Error)
  // })
});
