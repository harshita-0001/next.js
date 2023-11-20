import Link from "next/link";
import './about.css'
const Layout=({children})=>{
return(
    <div>
        <div>
            <ul className="nav-ul">
                <li>
                    <h4>About Navbar</h4>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li><Link href="/about/aboutstudent">AboutStudent</Link></li>
                <li><Link href="/about/aboutcollege">AboutCollege</Link></li>
            </ul>
        </div>
        {
            children
        }
    </div>
)
}

export default Layout;