import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productList from "../data/productList.json";

export const fetchAllProducts = createAsyncThunk(
  "fetch-all-products",
  async (apiUrl) => {
    const response = await fetch(apiUrl);
    return response.json();
  }
);

const productsSLice = createSlice({
  name: "products",
  initialState: {
    data: [],
    fetchStatus: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.fetchStatus = "success";
    });
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.fetchStatus = "loading";
    });
    builder.addCase(fetchAllProducts.rejected, (state) => {
      state.data = productList.products;
      state.fetchStatus = "error";
    });
  },
});

export default productsSLice;
