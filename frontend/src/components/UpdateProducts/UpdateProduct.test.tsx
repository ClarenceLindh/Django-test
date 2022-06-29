import { fireEvent, getByText, render, screen } from "@testing-library/react";
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

  test('check if "New values" text is rendered after clicking the "Edit" button', () => {
    render(
      <Provider store={store}>
        <UpdateProduct product={{
          id: 1,
          name: "Test product",
          price: 1
        }} />
      </Provider>
    );
    const editButtonElement = screen.getByRole("button", { name: "Edit"});
    fireEvent.click(editButtonElement);
    const buttonElement = screen.getByText(/new values/i);
    expect(buttonElement).toBeInTheDocument();
  });

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
    const buttonElement = screen.queryByRole("button", { name: "Submit changes"});
    expect(buttonElement).not.toBeInTheDocument();
  });
  
  test('check that "Submit" button is rendered if "Edit" button is clicked', () => {
    render(
      <Provider store={store}>
        <UpdateProduct product={{
          id: 1,
          name: "Test product",
          price: 1
        }} />
      </Provider>
    );
    const editButtonElement = screen.getByRole("button", { name: "Edit"});
    fireEvent.click(editButtonElement);
    const buttonElement = screen.getByRole("button", { name: "Submit changes"});
    expect(buttonElement).toBeInTheDocument();
  });
  
  test('check that input value is changed when submiting name change', () => {
    render(
      <Provider store={store}>
        <UpdateProduct product={{
          id: 1,
          name: "Test product",
          price: 123
        }} />
      </Provider>
    );
    const editButtonElement = screen.getByRole("button", { name: "Edit"});
    fireEvent.click(editButtonElement);
    const inputElement = screen.getByDisplayValue(/test product/i) as HTMLInputElement
    fireEvent.change(inputElement, {target: {value: "New name"}});
    const submitButtonElement = screen.getByRole("button", { name: "Submit changes"});
    fireEvent.click(submitButtonElement)
    expect(inputElement.value).toBe("New name");
  });

  test('check that input value is changed when submiting price change', () => {
    render(
      <Provider store={store}>
        <UpdateProduct product={{
          id: 1,
          name: "Test product",
          price: 123
        }} />
      </Provider>
    );
    const editButtonElement = screen.getByRole("button", { name: "Edit"});
    fireEvent.click(editButtonElement);
    const inputElement = screen.getByDisplayValue(/123/i) as HTMLInputElement
    fireEvent.change(inputElement, {target: {value: "321"}});
    const submitButtonElement = screen.getByRole("button", { name: "Submit changes"});
    fireEvent.click(submitButtonElement)
    expect(inputElement.value).toBe("321");
  });

  test('check that error message is displayed when submitting with empty input product name', () => {
    render(
      <Provider store={store}>
        <UpdateProduct product={{
          id: 1,
          name: "Test product",
          price: 123
        }} />
      </Provider>
    );
    const editButtonElement = screen.getByRole("button", { name: "Edit"});
    fireEvent.click(editButtonElement);
    const inputElement = screen.getByDisplayValue(/test product/i) as HTMLInputElement
    fireEvent.change(inputElement, {target: {value: ""}});
    const submitButtonElement = screen.getByRole("button", { name: "Submit changes"});
    fireEvent.click(submitButtonElement)
    const errorMessage = screen.getByText(/fill in name and price/i)
    expect(errorMessage).toBeInTheDocument();
  });
  

});
