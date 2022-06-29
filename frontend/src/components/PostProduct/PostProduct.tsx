import { SyntheticEvent, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addProductReducer } from "../productsSlice";

export const PostProduct = () => {
  const dispatch = useAppDispatch();
  
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(addProductReducer({
      name: productName,
      price: productPrice
    }))
  }

  const handleNameChange = (e: string) => {
    setProductName(e);
  }

  const handlePriceChange = (e: string) => {
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
        value={productName}
      />
      <input
        className="Input"
        type="number"
        placeholder="Product price..."
        required={true}
        onChange={(e) => handlePriceChange(e.target.value)}
        value={productPrice}
      />
      <button className="Button" onSubmit={handleSubmit}>Add</button>
    </form>
  );
};

export default PostProduct;