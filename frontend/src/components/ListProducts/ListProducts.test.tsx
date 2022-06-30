import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import ListProducts from "./ListProducts";

describe("List poducts", () => {
  test("something", async () => {
    // window.fetch = jest.fn();
    // window.fetch.mockResolvedValueOnce({
    //   json: async () => [
    //     { id: 1, name: "Product name", price: 100 },
    //     { id: 2, name: "Product name 2", price: 200 },
    //   ],
    // });

    render(
      <Provider store={store}>
        <ListProducts />
      </Provider>
    );


  });

  // test('check that error message is displayed when submitting with empty input product name', () => {
  //   render(
  //     <Provider store={store}>
  //       <UpdateProduct product={{
  //         id: 1,
  //         name: "Test product",
  //         price: 123
  //       }} />
  //     </Provider>
  //   );
  //   const editButtonElement = screen.getByRole("button", { name: "Edit"});
  //   fireEvent.click(editButtonElement);
  //   const inputElement = screen.getByDisplayValue(/test product/i) as HTMLInputElement
  //   fireEvent.change(inputElement, {target: {value: ""}});
  //   const submitButtonElement = screen.getByRole("button", { name: "Submit changes"});
  //   fireEvent.click(submitButtonElement)
  //   const errorMessage = screen.getByText(/fill in name and price/i)
  //   expect(errorMessage).toBeInTheDocument();
  // });
});
