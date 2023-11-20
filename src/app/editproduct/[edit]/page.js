'use client'
import axios from "axios";
import Link from "next/link";
import {useEffect,useState} from 'react';
import '../../addproduct/style.css'
import { redirect } from "next/navigation";
const updateProduct=(props)=>{
    const prodId=props.params.edit;
    const[name,setName]=useState("");
    const[color,setColor]=useState("");
    const[price,setPrice]=useState("");
    const[company,setCompany]=useState("");
    const getSingleProd=async()=>{
        const data=await axios("http://localhost:3000/api/product/"+prodId);
        const result=data?.data?.result;
        setName(result.name)
setColor(result.color)
setPrice(result.price)
setCompany(result.company)
    }
    useEffect(()=>{
        getSingleProd();
    },[])
    const editData=async()=>{
        try {
            const data=await axios("http://localhost:3000/api/product/"+prodId,{
            method:"PUT",
            data:JSON.stringify({name,price,company,color})
        });
        if(data?.data?.success)
        {
            alert("data updated")
        }
        } catch (error) {
            alert("error")
        }
        
    }
    return(
        <div>
            <h1>Update Product</h1>
            <input type="text" placeholder="Enter Name" className="input" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter Price" className="input" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder="Enter Color" className="input" value={color} onChange={(e) => setColor(e.target.value)} />
            <input type="text" placeholder="Enter Company" className="input" value={company} onChange={(e) => setCompany(e.target.value)} />
            <button className="btn" onClick={() => editData()}>Upadte Product</button>
            <Link href="/listproduct">Go To List</Link>
        </div>
    )
}

export default updateProduct;