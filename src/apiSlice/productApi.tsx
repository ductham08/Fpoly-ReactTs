import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Iproduct } from "../interfaces/product.interface"


export const productApi = createApi({
    reducerPath: "product_Api",
    tagTypes: ["product"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints: (builder) => ({
        getProducts: builder.query<Iproduct[], void>({
            query: () => "/products",
        }),
        getProduct: builder.query<Iproduct, number>({
            query: (id) => `/products/${id}`
        }),
        removeProduct: builder.mutation<{ success: boolean; id: number }, number>({
            query(id) {
                return {
                    url: `products/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ["product"]
        }),
        addProduct: builder.mutation<{ success: boolean; id: number }, number>({
            query(id) {
                return {
                    url: `products`,
                    method: 'POST',
                }
            },
            invalidatesTags: ["product"]
        }),
    })

})

export const { useGetProductsQuery, useGetProductQuery, useRemoveProductMutation, useAddProductMutation } = productApi;