import axios from "axios";
import { Product } from "../components/productsSlice";

export async function getAllProducts() {
  try {
    const res = await axios
      .get("http://127.0.0.1:8000/products/api", {
        auth: { username: "admin", password: "Haha!123" },
      })
      .then((response) => {
        return response.data.results;
      });
      console.log(res)
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function postProduct(product: Product) {
  try {
    const res = await axios
      .post(
        "http://127.0.0.1:8000/products/api",
        { name: product.name, price: product.price },
        {
          auth: { username: "admin", password: "Haha!123" },
        }
      )
      .then((response) => {
        return response.data.results;
      });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(id: number) {
  try {
    const res = await axios
      .delete("http://127.0.0.1:8000/products/api/" + id, {
        auth: { username: "admin", password: "Haha!123" },
      })
      .then((response) => {
        return response;
      });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function updateProduct(product: Product) {
  try{
    const res = await axios
    .put("http://127.0.0.1:8000/products/api/" + product.id, {id: product.id, name: product.name, price: product.price}, {
      auth: { username: "admin", password: "Haha!123" },
    })
    .then((response) => {
      console.log("updateProduct", response);
      return response;
    })
    return res;
  } catch (error) {

  }
}