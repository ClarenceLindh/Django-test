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
  
  test('check if "Product name" input renders with user input', () => {
    render(
      <Provider store={store}>
        <PostProduct />
      </Provider>
    );
    
    const inputElement = screen.getByPlaceholderText(/product name/i) as HTMLInputElement
    fireEvent.change(inputElement, {target: { value: "Test product name"}})
    expect(inputElement.value).toBe("Test product name");
  });
  
  test('check if "Product price" input renders with user input', () => {
    render(
      <Provider store={store}>
        <PostProduct />
      </Provider>
    );
    
    const inputElement = screen.getByPlaceholderText(/product price/i) as HTMLInputElement
    fireEvent.change(inputElement, {target: { value: "150"}})
    expect(inputElement.value).toBe("150");
  });

  test('check that "Product price" input only accepts numbers', () => {
    render(
      <Provider store={store}>
        <PostProduct />
      </Provider>
    );
    
    const inputElement = screen.getByPlaceholderText(/product price/i) as HTMLInputElement
    fireEvent.change(inputElement, {target: { value: "Test price"}})
    expect(inputElement.value).not.toBe("Test price");
  });

});