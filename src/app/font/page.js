import {Roboto} from 'next/font/google'
const roboto=Roboto({
    weight:"300",
    subsets:['latin'],
    display:'auto'
});
const FontOptimization=()=>{
    return(
            <div>
                <h1>This is Font Optimization</h1>
                <h3 className={roboto.className}>My Name is Harshita.</h3>
            </div>
    )
}

export default FontOptimization;