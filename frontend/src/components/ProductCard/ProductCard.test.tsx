import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import ProductCard from "./ProductCard";

describe('Product card', () => {
  
  it('checks if product name is rendered', () => {
    render(
      <Provider store={store}>
        <ProductCard product={{
          id: 1,
          name: "Test product 1",
          price: 10
        }} />
      </Provider>
    );
    
    const inputElement = screen.getByText("Test product 1")
    expect(inputElement).toBeInTheDocument();
  });

  it('checks if product price is rendered', () => {
    render(
      <Provider store={store}>
        <ProductCard product={{
          id: 1,
          name: "Test product 1",
          price: 10
        }} />
      </Provider>
    );
    
    const inputElement = screen.getByText("10 kr")
    expect(inputElement).toBeInTheDocument();
  });

});
