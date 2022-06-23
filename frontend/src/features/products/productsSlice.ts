import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import { RootState } from "../../app/store";
import Products from "./Products";
import { deleteProduct, getAllProducts, postProduct, updateProduct } from "./productsAPI";

export interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductsState {
  products: Product[];
  status: "idle" | "loading" | "failed";
}

const initialState: ProductsState = {
  products: [] as Product[],
  status: "idle",
};

export const fetchProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const response = await getAllProducts();
    return response;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductReducer: (state, action) => {
      postProduct(action.payload);
      state.products = [...state.products, action.payload];
      fetchProducts();
      console.log("addProductReducer", state.products); // fix so that new items get an id right away
    },
    deleteProductReducer: (state, action) => {
      deleteProduct(action.payload.id);
      state.products = [...state.products.filter(i => i.id !== action.payload.id)];
      console.log(state);
      console.log(action);
    },
    updateProductReducer: (state, action) => {
      console.log("updateProduct", action.payload);
      updateProduct(action.payload);

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = [...action.payload];
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addProductReducer, deleteProductReducer } =
  productsSlice.actions;

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
