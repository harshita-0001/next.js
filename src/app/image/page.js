import Image from 'next/image'
import logo from '../../../public/vercel.svg'
const ImageConfig=()=>{
    return(
     <div>
        <h1>Image Optimization</h1>
        <Image
        src={logo}
        alt='abc'/>
        <br />
        <Image
        src="https://plus.unsplash.com/premium_photo-1694714103696-25e10d1b907e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={500}
        height={500}
        alt='abc'
        />
     </div>
    )
}
export default ImageConfig;