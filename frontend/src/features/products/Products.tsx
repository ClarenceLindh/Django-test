import React, { useEffect, useId, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addProduct, fetchProducts, selectProducts } from "./productsSlice";
import { getAllProducts } from "./productsAPI";
import { PostProduct } from "./PostProduct";

function Products() {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.products.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, []);

  const ProductCard = (product: any) => {
    return (
      <div>
        <h3>{product.product.name}</h3>
        <h4>{product.product.price.toLocaleString()} kr</h4>
      </div>
    );
  };

  const DeleteProduct = () => {
    return <button className="Delete-Button">x</button>;
  };

  return (
    <div>
      {/* <input type="text" onSubmit={
        (e) => {
          e.preventDefault()
          dispatch(setProduct(e.target.value))
        }
      }/> */}
      <PostProduct />
      <ul className="Products">
        {products.map((product: any, index) => (
          <li className="Product" key={index}>
            <ProductCard product={product} />
            <DeleteProduct />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
