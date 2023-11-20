import axios from "axios";
import { table } from "console";
import Link from "next/link";
import DeleteButton from '../components/deleteprod'
const getProducts=async()=>{
    const prods=await axios("http://localhost:3000/api/product");
    return prods?.data;
}
const listProduct=async()=>{
    // const prodList=await getProducts();

    const res = await fetch("http://localhost:3000/api/product",{
       cache:"no-cache"
      });
    const data = await res.json();
    console.log(data,"data")

    // console.log(prodList);
    return(
        <div>
            <h1>List Of Product</h1>
            <table width="70%" border="1">
               <thead>
               <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Price</th>
                    <th>Color</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
               </thead>
          <tbody>
          {/* {
                prodList?.success&&prodList?.data?.map((item,i)=>(
                    <tr key={`row-${i}`}>
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.company}</td>
                    <td>{item.price}</td>
                    <td>{item.color}</td>
                    <td><Link href={`/editproduct/${item._id}`}>Edit</Link></td>
                    <td><DeleteButton id={item._id}/></td>
                </tr>
                ))
            } */}
               {
                data?.data?.map((item,i)=>(
                    <tr key={`row-${i}`}>
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.company}</td>
                    <td>{item.price}</td>
                    <td>{item.color}</td>
                    <td><Link href={`/editproduct/${item._id}`}>Edit</Link></td>
                    <td><DeleteButton id={item._id}/></td>
                </tr>
                ))
            }
          </tbody>
            </table>

        </div>
    )
}
export default listProduct;