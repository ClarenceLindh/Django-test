import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchProducts, Product } from "../productsSlice";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import UpdateProduct from "../UpdateProducts/UpdateProduct";
import ProductCard from "../ProductCard/ProductCard"

const ListProducts = () => {
  const products = useAppSelector<Product[]>((state) => state.products.products);
  const dispatch = useAppDispatch();
  const status = useAppSelector<string>((state) => state.products.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <div>
      <ul className="Products">
        {products.map((product: any, index) => (
          <li className="Product" key={index}>
            <ProductCard product={product} />
            <DeleteProduct product={product} />
            <UpdateProduct product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListProducts;
