'use client'

import axios from "axios"
import { useRouter } from "next/navigation";


const DeleteButton=(props)=>{
    const router=useRouter();
    const deleteProd=async(id)=>{
    
        const data=await axios("http://localhost:3000/api/product/"+id,{
            method:"DELETE"
        });
        if(data?.data?.success)
        {
            alert("data deleted")
            router.push("/listproduct")
        }
    }
    return <button onClick={()=>deleteProd(props.id)}>Delete</button>
}

export default DeleteButton;