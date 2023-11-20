'use client';
import Image from 'next/image';
import {useState} from 'react';
const ImageUpload=()=>{
    const[file,setFile]=useState("")
    const uploadImage=async(e)=>{
        e.preventDefault();
        const data=new FormData();
        data.set('file',file);
        let result=await fetch("api/upload",{
            method:"POST",
            body:data
        });
        result=await result.json();
        if(result?.success)
        {
            alert("image Uploaded")
        }
    }
    return(
        <div>
            <h1>Image Upload</h1>
            <form onSubmit={uploadImage}>
                <input type="file" name="image" onChange={(e)=>setFile(e.target.files?.[0])} />
                <button type='submit'> Upload Image</button>
            </form>
            <div>
                <Image
                src={'/images1.jpg'}
                alt='image'
                width={300}
                height={100}
                />
            </div>
        </div>
    )
}

export default ImageUpload;