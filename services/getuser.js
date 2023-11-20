import axios from "axios";

const GetUser=async()=>{
    const data=await axios('https://dummyjson.com/users');
    return data;
}
export default GetUser;