import { data } from 'cheerio/lib/api/attributes';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../apiSlice/productApi';
import { useAppDispatch, useAppSelector } from '../app/hook'
import { deleteProduct, fetchProducts } from '../slices/products';

type Props = {}

const Product = () => {

    const { data: products, isLoading, error } = useGetProductsQuery();

    // const dispatch = useAppDispatch();
    // const products = useAppSelector((state) => state.product.value)

    // const removeProduct = (id: number) => {
    //     dispatch(deleteProduct(id))
    // }

    // useEffect(() => {
    //     dispatch(fetchProducts())
    // }, [])
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return (
        < div>
            {products!.map((product: any) => (
                <div key={product.id}>
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                </div>
            ))
            }
        </ div >
    )
}

export default Product