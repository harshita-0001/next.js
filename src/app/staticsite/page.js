import Link from "next/link";
import getuser from "../../../services/getuser";

const Users=async()=>{
    const getUserList=getuser();
    const data=await getUserList;
    const userList=data?.data?.users
    return(
            <div>
                <h1>Users</h1>
                {
                    userList?.map(item=>(
                       <h3 key={`${item.id}-row`}> <Link href={`/staticsite/${item.id}`}>{item.firstName}</Link></h3>
                    ))  
                }
            </div>
    )
}

export default Users;