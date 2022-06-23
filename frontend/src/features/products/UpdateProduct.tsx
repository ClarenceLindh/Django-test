import React from "react";
import { ProductObject } from "./Products";

function UpdateProduct(product: ProductObject) {
  
  const handleUpdate = () => {
    console.log(product.product)
  }

  return (
    <button className="Edit-Button" onClick={handleUpdate}>Edit</button>
  )
}

export default UpdateProduct;
