import { useAppDispatch } from "../../store/hooks";
import { deleteProductReducer, ProductObject } from "../productsSlice";

const DeleteProduct = (product: ProductObject, ProductObject: ProductObject) => {
  const dispatch = useAppDispatch();

  const handleDelete = (product: ProductObject) => {
    dispatch(deleteProductReducer(product.product));
  };

  return <button className="Delete-Button" onClick={() => handleDelete(product)}>X</button>;
}

export default DeleteProduct;
