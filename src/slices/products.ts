import { getProduct, getProducts, removeProduct, editProduct, addProduct } from "../apis/product";
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Iproduct } from "../interfaces/product.interface";

export const fetchProducts = createAsyncThunk("products/fetchProducts", getProducts);
export const fetchProduct = createAsyncThunk("products/fetchProduct", getProduct);


const initialState: { value: Iproduct[] } = {
    value: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Iproduct[]>) => {
            state.value = action.payload;
        })

    }
})

export default productSlice.reducer

