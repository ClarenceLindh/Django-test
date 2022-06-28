import { getByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import UpdateProduct from "./UpdateProduct";

describe('Update poducts', () => {
  test('check if "Edit" button is rendered', () => {
    render(
      <Provider store={store}>
        <UpdateProduct product={{
          id: 1,
          name: "Test product",
          price: 1
        }} />
      </Provider>
    );
    const buttonElement = screen.getByRole("button", { name: /edit/i});
    expect(buttonElement).toBeInTheDocument();
  });

  // test('check if "New Values" text is rendered after clicking the "Edit" button', () => {
  //   render(
  //     <Provider store={store}>
  //       <UpdateProduct product={{
  //         id: 1,
  //         name: "Test product",
  //         price: 1
  //       }} />
  //     </Provider>
  //   );
  //   const editButtonElement = screen.getByRole("button", { name: "Edit"})
  //   userEvent.click(editButtonElement)
  //   const buttonElement = screen.getByText(/new values/i);
  //   expect(buttonElement).toBeInTheDocument();
  // });

  test('check that "Submit" button is not rendered if "Edit" button is not clicked', () => {
    render(
      <Provider store={store}>
        <UpdateProduct product={{
          id: 1,
          name: "Test product",
          price: 1
        }} />
      </Provider>
    );
    const buttonElement = screen.queryByRole("button", { name: "Submit changes"})
    expect(buttonElement).not.toBeInTheDocument();
  });
  
  // test('check that "Submit" button is rendered if "Edit" button is clicked', () => {
  //   render(
  //     <Provider store={store}>
  //       <UpdateProduct product={{
  //         id: 1,
  //         name: "Test product",
  //         price: 1
  //       }} />
  //     </Provider>
    
  //   );

  //   const editButtonElement = screen.getByRole("button", { name: "Edit"})
  //   userEvent.click(editButtonElement)

  //   const buttonElement = screen.getByRole("button", { name: "Submit changes"})
  //   expect(buttonElement).not.toBeInTheDocument();
    
  // });

  

});
