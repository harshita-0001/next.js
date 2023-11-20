'use client';
import axios from 'axios';
import {useState,useEffect} from 'react';
const UpdateData=({params})=>{
    const id=parseInt(params.id);
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[age,setAge]=useState("");
    const getData=async()=>{
        let data=await axios("http://localhost:3000/api/user/"+id);
        const user=data?.data?.data;
        setName(user.name);
        setEmail(user.email);
        setAge(user.age);
    }
    useEffect(()=>{
        getData();
    },[])
    const editData=async()=>{
      try {
        const result=await axios("http://localhost:3000/api/user/"+id,{
            method:"PUT",
            data:JSON.stringify({
                name,age,email,id
            })
           })
           if(result?.data?.success)
              {
                console.log(result?.data);
                       alert("data Updated")
              }
      } catch (error) {
        alert("something went wrong")
      }
      
    }
    return(
        <div>
            <h1>Upadte User Detail</h1>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/><br />
            <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <input type="text" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)}/><br />
            <button onClick={()=>editData()}>Update Data</button>
        </div>
    )
}

export default UpdateData;