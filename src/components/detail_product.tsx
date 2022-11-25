import React from 'react'
import { useParams, useRoutes } from 'react-router-dom'
import { useGetProductQuery } from '../apiSlice/productApi'

type Props = {}

const Detail_product = (props: Props) => {

    const { id } = useParams()

    const { data: product, isLoading, error } = useGetProductQuery(id)


    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return (
        <div>{product?.name} - {product?.price}</div>
    )
}

export default Detail_product