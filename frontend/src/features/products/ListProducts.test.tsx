import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import ListProducts from "./ListProducts";

describe("List poducts", () => {
  test("renders posts if request succeeds", async () => {
    // Arrange
    // window.fetch = jest.fn();
    // window.fetch.mockResolvedValueOnce({
    //   json: async () => [{id: 1, name: 'Product name', price: 100}]
    // });
    render(
      <Provider store={store}>
        <ListProducts />
      </Provider>
    );

    // Act

    // Assert
    const listProductsElements = await screen.findAllByRole('listitem');
    expect(listProductsElements).not.toHaveLength(0);
    
  });
});