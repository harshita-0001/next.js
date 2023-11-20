import axios from "axios";
import Link from "next/link";
import DeleteUser from "../components/delete";

const getData=async()=>{
    const data=await axios("http://localhost:3000/api/user")
   return data?.data?.data
}

const AllUser=async()=>{
    const users=await getData();
        return(
        <div>
            <h1>Api Call</h1>     
            {
                users?.map((item,i)=>(
                    <div key={i} style={{border:"1px solid black"}} > 
                   <Link href={`/apicall/${item.id}`}>
                    
                            <h1>Name:{item.name}</h1>
                            <h1>Email:{item.email}</h1>
                            <h1>Age:{item.age}</h1>
                            <h1>Id:{item.id}</h1>
                            
                    
                   </Link>
                   <Link href={`/apicall/${item.id}/update`}>EDIT</Link>
                    <DeleteUser id={item.id}/>
                    </div> 

                ))
            }    
        </div>
    )
}
export default AllUser;