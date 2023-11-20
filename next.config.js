/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:"export",
    images:{
        domains:["plus.unsplash.com"]
    },
    redirects:async()=>{
        return[
            {
                source:"/redirection",
                destination:"/",
                permanent:false
            }
        ]
    }
    
}


module.exports = nextConfig
