import { createAsyncThunk, createSlice, isRejected } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import {
  deleteProduct,
  getAllProducts,
  postProduct,
  updateProduct,
} from "../API/productsAPI";
import { WritableDraft } from "immer/dist/internal";

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface ProductObject {
  product: {
    id: number;
    name: string;
    price: number;
  };
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

    return response.sort((a: any, b: any) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
  }
);

export const sortByName = (state: WritableDraft<ProductsState>) => {
  state.products.sort((a: any, b: any) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductReducer: (state, action) => {
      postProduct(action.payload);
      state.products = [...state.products, action.payload];
      fetchProducts();
      sortByName(state);
    },
    deleteProductReducer: (state, action) => {
      deleteProduct(action.payload.id);
      state.products = [
        ...state.products.filter((i) => i.id !== action.payload.id),
      ];
      sortByName(state);
    },
    updateProductReducer: (state, action) => {
      updateProduct(action.payload);
      state.products = [
        ...state.products.filter((i) => i.id !== action.payload.id),
      ];
      state.products = [...state.products, action.payload];
      sortByName(state);
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

export const { updateProductReducer, addProductReducer, deleteProductReducer } =
  productsSlice.actions;

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
