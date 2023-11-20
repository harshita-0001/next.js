import axios from "axios";

async function allData(){
const data=await axios("https://dummyjson.com/products");
return  data?.data?.products
}
const dataList= async ()=>{
    const prod=await allData();
    console.log(prod,"prod");
    return(
        <div>
                {
                        prod?.map((item,i)=>(
                                <h2 key={i}>{item.title}</h2>
                        ))
                }
        </div>
    )
}

export default dataList;