import { Link } from 'react-router-dom';
import { useGetProductsQuery, useRemoveProductMutation } from '../apiSlice/productApi';
import { Iproduct } from '../interfaces/product.interface';

type Props = {}

const Product = () => {

    const { data: products, isLoading, error } = useGetProductsQuery();


    const onHandle = (product: Iproduct) => {
        const id = product.id;
        const [remove, result] = useRemoveProductMutation();
        const removeProduct = remove(id as number)
    }


    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return (
        < div >
            {products!.map((product: any) => (
                <div key={product.id}>
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                    <button onClick={() => onHandle(product)}>Remove</button>
                </div>
            ))
            }
        </ div >
    )
}

export default Product