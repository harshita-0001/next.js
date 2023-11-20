'use client'
import { useEffect, useState } from "react";
import axios from 'axios'
const Product = () => {
    const [product, setProduct] = useState([])
    const getData = async () => {
        const data = await axios('https://dummyjson.com/products');
        setProduct(data?.data?.products)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <h1>Prodcut List</h1>
            <table border={1} width="70%">
            <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {
                product?.map((item, i) => (
                    <tr key={`row-${i}`}>
                        <td>{i+1}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                    </tr>
                ))
            }
            </tbody>
            </table>
        </div>
    )
}

export default Product;