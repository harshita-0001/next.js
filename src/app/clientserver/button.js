'use client'
const ButtonPrice=({price})=>{
    return(
        <div>
        <button onClick={()=>alert(price)}>price</button>
        </div>
    )
}

export default ButtonPrice;