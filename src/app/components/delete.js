'use client';

import axios from "axios";

const DeleteUser=({id})=>{
    const deleteuser=async(id)=>{
            const data=await axios("http://localhost:3000/api/user/"+id);
            console.log(data);
            if(data?.data?.Success)
            {
                alert("user deleted")
            }
    }
    return <button onClick={()=>deleteuser(id)}>Delete</button>
}

export default DeleteUser;