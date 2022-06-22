import { useId, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addProduct, Product } from "./productsSlice";

export const PostProduct = () => {
  const dispatch = useAppDispatch();
  
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const id = useId();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addProduct({
      name: productName,
      price: productPrice
    }))
    console.log(productName, productPrice);
    console.log(e);
  }

  const handleNameChange = (e: any) => {
    console.log(e);
    setProductName(e);
  }

  const handlePriceChange = (e: any) => {
    console.log(e);
    setProductPrice(e);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="Input"
        type="text"
        placeholder="Product name..."
        required={true}
        onChange={(e) => handleNameChange(e.target.value)}
      />
      <input
        className="Input"
        type="number"
        placeholder="Price..."
        required={true}
        onChange={(e) => handlePriceChange(e.target.value)}
      />
      <button className="Button" onSubmit={handleSubmit}>Add</button>
    </form>
  );
};