import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/api/products");
    localStorage.setItem("products", JSON.stringify(response.data));
    return response.data;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    sellingProducts: [],
    status: null,
  },
  reducers: {
    filterByCategory: (state, { payload }) => {
      const productsClone = [...JSON.parse(localStorage.getItem("products"))];
      if (payload === "all") state.products = productsClone;
      else {
        const filteredProducts = productsClone.filter(
          (item) => item.category === payload
        );
        state.products = filteredProducts;
      }
    },
    getSellingProducts: (state) => {
      const productsClone = [...JSON.parse(localStorage.getItem("products"))];
      const allProducts = productsClone.filter((item) =>
        item.hasOwnProperty("oldprice")
      );
      state.sellingProducts = allProducts;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "Pending";
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});
export const { filterByCategory, getSellingProducts } = productsSlice.actions;
export default productsSlice.reducer;
