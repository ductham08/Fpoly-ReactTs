import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Iproduct } from "../interfaces/product.interface";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints: (builder) => ({
        getProducts: builder.query<Iproduct[], void>({
            query: () => "/products",
        }),
    }),
});

export const { useGetProductsQuery } = productApi;