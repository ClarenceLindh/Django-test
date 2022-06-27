import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import UpdateProduct from "./UpdateProduct";

describe("Update poducts", () => {
  test("error message is displayed when clicking submit with empty product", () => {
    // Arrange
    render(
      <Provider store={store}>
        <UpdateProduct product={{
          id: 0,
          name: "",
          price: 0
        }} />
      </Provider>
    
    );

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    // Assert
    const outputElement = screen.getByText('Cannot update', { exact: false})
    expect(outputElement).not.toBeInTheDocument()
    
  });
});
