import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../store/store";
import PostProduct from "./PostProduct"

describe('Update poducts', () => {
  
  it('checks if input element with placeholder "Product name" is rendered', () => {
    render(
      <Provider store={store}>
        <PostProduct />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(/product name/i);
    expect(inputElement).toBeInTheDocument();
  });
  
  it('checks if input element with placeholder "Product price" is rendered', () => {
    render(
      <Provider store={store}>
        <PostProduct />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(/product price/i);
    expect(inputElement).toBeInTheDocument();
  });
  
  it('checks if "Add" button is rendered', () => {
    render(
      <Provider store={store}>
        <PostProduct />
      </Provider>
    );
    const buttonElement = screen.getByRole("button", { name: /add/i });
    expect(buttonElement).toBeInTheDocument();
  });
  
  it('checks if "Product name" input renders with user input', () => {
    render(
      <Provider store={store}>
        <PostProduct />
      </Provider>
    );
    
    const inputElement = screen.getByPlaceholderText(/product name/i) as HTMLInputElement
    fireEvent.change(inputElement, {target: { value: "Test product name"}});
    expect(inputElement.value).toBe("Test product name");
  });
  
  it('checks if "Product price" input renders with user input', () => {
    render(
      <Provider store={store}>
        <PostProduct />
      </Provider>
    );
    
    const inputElement = screen.getByPlaceholderText(/product price/i) as HTMLInputElement
    fireEvent.change(inputElement, {target: { value: "150"}})
    expect(inputElement.value).toBe("150");
  });

  it('checks that "Product price" input does not accept strings', () => {
    render(
      <Provider store={store}>
        <PostProduct />
      </Provider>
    );
    
    const inputElement = screen.getByPlaceholderText(/product price/i) as HTMLInputElement
    fireEvent.change(inputElement, {target: { value: "Test price"}});
    expect(inputElement.value).not.toBe("Test price");
  });

  // it('should prevent default action on submit', () => {
  //   render(
  //     <Provider store={store}>
  //       <PostProduct />
  //     </Provider>
  //   );
    
  //   const inputElement = screen.getByPlaceholderText(/product price/i) as HTMLInputElement
  //   fireEvent.change(inputElement, {target: { value: 123}})
  //   expect(inputElement.value).toBe("123");

  //   const inputElement2 = screen.getByPlaceholderText(/product name/i) as HTMLInputElement
  //   fireEvent.change(inputElement2, {target: { value: "Test product name"}});
  //   expect(inputElement2.value).toBe("Test product name");

  //   const submitElement = screen.getByText(/submit/i);
  //   const keyDownEvent = createEvent.click(submitElement);
  //   fireEvent.click(keyDownEvent);
  //   expect(keyDownEvent.defaultPrevented).toBeTruthy;

  // });



});