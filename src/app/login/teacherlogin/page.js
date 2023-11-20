'use client'

import { useRouter } from "next/navigation";

const StudentLogin=()=>{
    const router=useRouter();
    return(
        <div>
            <h1>Welcome to TeacherLogin Page</h1>
            <button onClick={()=>router.push("/login")}>Go To Login Page</button>
        </div>
    )
}

export default StudentLogin;