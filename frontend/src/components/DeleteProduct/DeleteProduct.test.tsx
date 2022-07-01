import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import DeleteProduct from "./DeleteProduct";

describe("Delete poducts", () => {
  it('checks if "delete" button is rendered', async () => {
    render(
      <Provider store={store}>
        <DeleteProduct product={{
          id: 0,
          name: "",
          price: 0
        }} />
      </Provider>
    );
    const buttonElement = screen.getByRole("button", { name: /x/i });
    expect(buttonElement).toBeInTheDocument();
  });
});