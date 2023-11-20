import GetUser from "../../../../services/getuser";

const User=()=>{
    return(
            <div>
                <h1>User Details</h1>
            </div>
    )
}

export default User;

export async function generateStaticParams(){
    const getUserList=GetUser();
    const data=await getUserList;
    console.log(data);
    const user=data?.data?.users;
    return user?.map(u=>({
        userid:u.id.toString()
    }))

}