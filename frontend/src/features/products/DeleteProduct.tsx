import { SyntheticEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { deleteProductReducer } from "./productsSlice";
import { ProductObject } from "./Products"

function DeleteProduct(product: ProductObject, ProductObject: ProductObject) {
  const dispatch = useAppDispatch();

  const handleDelete = (product: ProductObject) => {
    dispatch(deleteProductReducer(product.product));
    console.log("handleDelete", product.product)
  };

  return <button className="Delete-Button" onClick={() => handleDelete(product)}>X</button>;
}

export default DeleteProduct;
