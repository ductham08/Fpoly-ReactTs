import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hook'
import { fetchProducts } from '../slices/products';

type Props = {}

const Product = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.product.value)
    console.log("product", products);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        < div>
            {products.map((item) => (
                <div key={item.id}>
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                    <button>Remove</button>
                </div>
            ))
            }
        </ div >
    )
}

export default Product