import { SyntheticEvent, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { deleteProductReducer, fetchProducts } from "./productsSlice";
import DeleteProduct from "./DeleteProduct";
import UpdateProduct from "./UpdateProduct";

export interface ProductObject {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

function Products() {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.products.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch]);

  const ProductCard = (product: ProductObject) => {
    return (
      <div>
        <h3>{product.product.name}</h3>
        <h4>{product.product.price.toLocaleString()} kr</h4>
      </div>
    );
  };

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

export default Products;
