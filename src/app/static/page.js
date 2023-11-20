import Image from  'next/image'
const StaticContent=()=>{
return(
    <div>
        <h3>Static Assests is written into public folder normally which content doesnot neeed to change that written as ststaic assests</h3>
        <Image
        src="/staticimg.jpg"
        width={200}
        height={200}
        alt="ddd"/>
    </div>
)
}
export default StaticContent;