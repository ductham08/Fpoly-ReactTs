import { getProduct, getProducts, removeProduct, editProduct, addProduct } from "../apis/product";
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Iproduct } from "../interfaces/product.interface";

export const fetchProducts = createAsyncThunk("products/fetchProducts", getProducts);
export const fetchProduct = createAsyncThunk("products/fetchProduct", getProduct);
export const deleteProduct = createAsyncThunk("products/removeProduct", (id: number) => removeProduct(id));


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
        builder.addCase(deleteProduct.fulfilled, (state, action: PayloadAction<Iproduct>) => {
            state.value = state.value.filter((item) => { item.id !== action.payload.id })
        })


    }
})



export default productSlice.reducer

