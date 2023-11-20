'use client'
import { useRouter } from "next/navigation";

const AboutStudent=()=>{
    const router=useRouter();
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Welcome to AboutStudent Page</h1>
            <button onClick={()=>router.push("/about")}>Go To About Page</button>

        </div>
    )
}

export default AboutStudent;