import instance from "./instance";
import { Iproduct } from "../interfaces/product.interface";




export const getProducts = async (): Promise<Iproduct[]> => {
    return await instance.get("/products");
}

export const getProduct = async (id: number): Promise<Iproduct> => {
    return await instance.get(`/products/${id}`);
}

export const removeProduct = async (id: number): Promise<Iproduct> => {
    return await instance.delete(`/products/${id}`);
}

export const addProduct = async (product: Iproduct) => {
    return await instance.post('/products', product);
}

export const editProduct = async (product: Iproduct) => {
    return await instance.put(`/products/${product.id}`, product);
}