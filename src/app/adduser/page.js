'use client';
import axios from 'axios';
import { useState } from 'react'
const AddUser = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const addUser = async () => {
      
        try {
            let data = await axios("http://localhost:3000/api/user", {
                method: "POST",
                data: JSON.stringify({ name, age, email })
            })
            data = data;
            console.log(data);
            if (data) {
                alert("data Added Succesfully")
            }
        } catch (error) {
            alert("Something went wrong lease try again")
        }


    }
    return (
        <div>
            <h1>Add USer</h1>
            <input type="text" value={name} placeholder="Add name" onChange={(e) => setName(e.target.value)} /><br />
            <input type="text" value={email} placeholder="Add email" onChange={(e) => setEmail(e.target.value)} /><br />
            <input type="text" value={age} placeholder="Add age" onChange={(e) => setAge(e.target.value)} /><br />
            <button onClick={addUser}>Add User</button>
        </div>
    )
}

export default AddUser;