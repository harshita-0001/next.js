'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login=()=>{
    const router=useRouter();
    return(
        <div>
            <h3>Basic Router</h3>
                    <h1>Login Page</h1>
                    <Link href="/">Go To Home Page</Link>
                    <button onClick={()=>router.push("/")}>Go To Home Page</button>
                    <h3>Nested Router</h3>
                    <button onClick={()=>router.push("/login/studentlogin")}>Go to studentLogin</button>
                    <button onClick={()=>router.push("/login/teacherlogin")}>Go to teacherLogin</button>
        </div>
    )
}

export default Login;