'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const About=()=>{
    const router=useRouter();
    return(
      <div>
        <h3>Basic Router</h3>
        <h1>About</h1>
        <Link href="/">Go To Home Page</Link>
        <button onClick={()=>router.push("/")}>Go To Home Page</button>
        <h3>Nested Router</h3>
        <button onClick={()=>router.push("/about/aboutstudent")}>Go To AboutStudent</button>
        <button onClick={()=>router.push("/about/aboutcollege")}>Go To AboutCollege</button>
      </div>

    )
}

export default About;