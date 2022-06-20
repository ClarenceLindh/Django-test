import { GET_PRODUCTS, PRODUCTS_ERROR } from "../types";
import axios from "axios";

export const getProducts = () => async (dispatch: any) => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/products/api", {
      headers: {
        Authorization: "Basic " + window.btoa("admin:Haha!123"),
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: console.log(err),
    });
  }
};
