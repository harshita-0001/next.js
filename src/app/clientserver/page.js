import axios from 'axios';
import ButtonPrice from './button.js'
const productList=async()=>{
        const data=await axios("https://dummyjson.com/products");
        console.log('====================================');
        console.log(data?.data?.products,"data");
        console.log('====================================');
        return data?.data?.products
}
const ClientServer = async() => {
    const product=await productList();
    console.log('====================================');
    console.log(product);
    console.log('====================================');
    return (
        <div>
            <h1>Product List</h1>
            <table border={1} width="70%">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product?.map((item, i) => (
                            <tr key={`row-${i}`}>
                                <td>{i + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td><ButtonPrice price={item.price}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ClientServer;