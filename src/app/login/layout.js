import Link from "next/link";
import './login.css'
const Layout=({children})=>{
return(
    <div>
        <nav>
            <ul className="nav-ul">
                <li>
                    <h4>Login Navbar</h4>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li><Link href="/login/teacherlogin">LoginTeacher</Link></li>
                <li><Link href="/login/studentlogin">LoginStudnt</Link></li>
            </ul>
        </nav>
       <main>
       {
            children
        }
       </main>
    </div>
)
}

export default Layout;