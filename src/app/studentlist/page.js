'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const StudentList=()=>{
    const name=[
        "harshita",
        "Nensi",
        "Brinda",
        "kinjal"
    ]
    const router=useRouter();
    return(
        <div>
            <button onClick={()=>router.push("/")}>Go To Home Page</button>
            <h1>Student Detail</h1>
                <ul>
                    {
                        name?.map((item,i)=>
                           ( <li>
                                <Link href={`studentlist/${item}`}>{item}</Link>
                            </li>)
                        )
                    }
                </ul>
        </div>
    )
}

export default StudentList;