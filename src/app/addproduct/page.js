'use client';
import './style.css';
import axios from 'axios';
import { useState } from 'react';
const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [company, setCompany] = useState("");
    const addData = async () => {
        const result = await axios("http://localhost:3000/api/product", {
            method: "POST",
            data: JSON.stringify({ name, price, color, company })
        });
        if (result?.data?.success) {
            alert("product added succesfully ")
            setName("");
            setPrice("");
            setColor("");
            setCompany("");
        }

    }
    return (
        <div>
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter Name" className="input" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter Price" className="input" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder="Enter Color" className="input" value={color} onChange={(e) => setColor(e.target.value)} />
            <input type="text" placeholder="Enter Company" className="input" value={company} onChange={(e) => setCompany(e.target.value)} />
            <button className="btn" onClick={() => addData()}>Add Product</button>
        </div>
    )
}

export default AddProduct;