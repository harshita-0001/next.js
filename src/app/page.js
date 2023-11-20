'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [data,setData]=useState("Harshita");
  const router=useRouter();
  const changeName=()=>{
    setData("Hiren")
    alert("change name succesfully")
  }
  const Navgator=(path)=>{
      router.push(path)
  }
  return (
    <main className={styles.main}>
      <h1>Component</h1>
      <Name name="Harshita"/>
      <Name name="Nenu"/>
      <h2>Hello Next.js</h2>
      <h3>============================================================</h3>
      <h1>Function and state</h1>
      <button onClick={()=>changeName()}>Click for change name</button>
      <h2>My name is {data}</h2>
      <h3>============================================================</h3>
      <h1>Linking and Navigation</h1>
      <h2>Linking</h2>
      <Link href="/login">Go To Login Page</Link>
        <br />
        <br />
        <Link href="/about">Go To About Page</Link>
        <h2>Navigation</h2>
        <button onClick={()=>Navgator("/login")}>Go To Login Page</button>
        <button onClick={()=>Navgator("/about")}>Go To About Page</button>
       
      <h3>========================07-11-2023====================================</h3>
      <h3>========================Middleware====================================</h3>
      <h3>========================page Not Found====================================</h3>
      <h3>========================css with next.js==================================</h3>
      <h3>==================static rendering and server renderig====================</h3>
      <h3>========================css Modules==================================</h3>

      <h1>Daynamic Routes</h1>
      <button onClick={()=>Navgator("/studentlist")}>Go To StudentList Page</button>
      <h3>============================================================</h3>
      <h1>Segament of Routes</h1>
      <button onClick={()=>Navgator("/study")}>Go To Lecture list</button>
      <h3>============================================================</h3>
      <h1>Api Calling From Client Component </h1>
      <button onClick={()=>Navgator("/product")}>Go To product</button>
      <h3>============================================================</h3>
      <h1>Api Calling From Server Component </h1>
      <button onClick={()=>Navgator("/productserver")}>Go To productserver</button>
      <h3>============================================================</h3>
      <h1>Client component with server component</h1>
      <button onClick={()=>Navgator("/clientserver")}>Go To Client and Server mix component</button>
      <h3>============================================================</h3>
      <h1>Image Optimization</h1>
      <button onClick={()=>Navgator("/image")}>Go To Image Optimization</button>
      <h3>============================================================</h3>
      <h1>Font Optimization</h1>
      <button onClick={()=>Navgator("/font")}>Go To Font Optimization</button>
      <h3>============================================================</h3>
      <h1>GenerateMetadata for Daynamic metadata</h1>
      <button onClick={()=>Navgator("/generatemetadata")}>Go To Font GenerateMetadata</button>
      <h3>============================08.11.2023================================</h3>
      <h3>============================Production and devlopment build================================</h3>
      <h3>============================Environment Variables================================</h3>
      <h1>Script component</h1>
      <button onClick={()=>Navgator("/script")}>Go To Script Component</button>
      <h3>============================================================</h3>
      <h1>Loader</h1>
      <button onClick={()=>Navgator("/loader")}>Go To Loader</button>
      <h3>============================================================</h3>
      <h1>Static</h1>
      <button onClick={()=>Navgator("/static")}>Go To Static</button>
      <h3>============================================================</h3>
      <h1>Static Html page with build</h1>
      <button onClick={()=>Navgator("/statichtml")}>Go To Static HTML Page</button>
      <h3>============================================================</h3>
      <h1>Static site (SSG)</h1>
      <button onClick={()=>Navgator("/staticsite")}>Go To Static Site</button>
      <h3>============================================================</h3>
      <h1>Redirection</h1>
      <button onClick={()=>Navgator("/redirection")}>Go To Redirection</button>
      <h3>============================api Router================================</h3>
      <h3>=============================GET Api With Static Data===============================</h3>
      <h3>============================Call Next Js Api================================</h3>
      <h1>get Api call</h1>
      <button onClick={()=>Navgator("/apicall")}>Go To Get ApiCall</button>
      <h1>POST Api call</h1>
      <button onClick={()=>Navgator("/adduser")}>Go To Get ApiCall</button>
      <h3>============================09.11.2023================================</h3>
      <h3>======================Put Api And Integrate with Next.js==============</h3>
      <h3>======================Delete Api and integrate with Next.js==============</h3>
      <h3>======================Product using database and api==================</h3>
      <h1>Add Product</h1>
      <button onClick={()=>Navgator("/addproduct")}>Go To AddProduct</button>
      <button onClick={()=>Navgator("/listproduct")}>Go To ListProduct</button>
      <h3>==========================10.11.2023================================</h3>
      <h1>Image Upload</h1>
      <button onClick={()=>Navgator("/imageupload")}>Go To ImageUpload</button>

    </main>
  )
}


function Name(props){
  return(
    <h1>Hello {props.name}</h1>
  )
}