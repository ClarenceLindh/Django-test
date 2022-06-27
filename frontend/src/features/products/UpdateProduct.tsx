import React, { SyntheticEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { ProductObject } from "./Products";
import { updateProductReducer } from "./productsSlice";

function UpdateProduct(product: ProductObject) {
  const dispatch = useAppDispatch();

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [updateStatus, setUpdateStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

  const handleUpdateSubmit = () => {
    if (productName && productPrice) {
      dispatch(
        updateProductReducer({
          id: product.product.id,
          name: productName,
          price: productPrice,
        })
        );
        setErrorMessage("")
        console.log(product.product);
      }
    else{
      setErrorMessage("Cannot update with empty values...")
    } 
  };

  const toggleUpdate = () => {
    setUpdateStatus(!updateStatus);
  };

  const handleNameChange = (e: string) => {
    console.log(e);
    setProductName(e);
  };

  const handlePriceChange = (e: string) => {
    console.log(e);
    setProductPrice(e);
  };

  return (
    <div>
      <button className="Edit-Button" onClick={toggleUpdate}>
        Edit
      </button>
      {updateStatus && (
        <div>
          <form>
            <input
              className="Input"
              type="text"
              placeholder="New name..."
              required={true}
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <input
              className="Input"
              type="text"
              placeholder="New price..."
              required={true}
              onChange={(e) => handlePriceChange(e.target.value)}
            />
          </form>
          <button className="Button" onClick={handleUpdateSubmit}>
            Submit changes
          </button>
          {errorMessage.length !== 0 && (
            <div>
              {errorMessage}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UpdateProduct;
