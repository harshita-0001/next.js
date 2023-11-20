import axios from "axios";

const getData=async(id)=>{
    const data=await axios(`http://localhost:3000/api/user/${id}`)
   return data?.data?.data
}

const SingleUser=async({params})=>{
    const result=await getData(params.id)
    console.log(result);
    return(
        <div>
            <h1>Single User</h1>
            <h2>Name:{result.name}</h2>
            <h2>Email:{result.email}</h2>
            <h2>Age:{result.age}</h2>
            <h2>Id:{result.id}</h2>
        </div>
    )
}

export default SingleUser