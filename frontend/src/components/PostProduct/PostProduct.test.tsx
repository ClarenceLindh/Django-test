import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../store/store";
import PostProduct from "./PostProduct"

describe('Update poducts', () => {
  
  test('check if input element with placeholder "Product name" is rendered', () => {
    render(
      <Provider store={store}>
        <PostProduct />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(/product name/i)
    expect(inputElement).toBeInTheDocument();
  });
  
  test('check if input element with placeholder "Product price" is rendered', () => {
    render(
      <Provider store={store}>
        <PostProduct />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(/product price/i)
    expect(inputElement).toBeInTheDocument();
  });
  
  test('check if "Add" button is rendered', () => {
    render(
      <Provider store={store}>
        <PostProduct />
      </Provider>
    );
    const buttonElement = screen.getByRole("button", { name: /add/i });
    expect(buttonElement).toBeInTheDocument();
  });
  
  // test('check if input product name renders with user input', () => {
  //   render(
  //     <Provider store={store}>
  //       <PostProduct />
  //     </Provider>
  //   );
    
  //   const inputElement = screen.getByPlaceholderText(/product name/i)
  //   fireEvent.change(inputElement, {target: { value: "Test product name"}})
  //   expect(inputElement.value).toBe("Test product name");
  // });
  
});