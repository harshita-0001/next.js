import mongoose from "mongoose";
import { NextResponse } from "next/server";
import {connectionStr} from '@/database/connection'
import {Product} from '@/database/model/product'


export async function GET()
{
    let data=[];
    let success=true;
    try {
    await mongoose.connect(connectionStr)
     data =await Product.find();
    } catch (error) {
        success=false;
    }
    return NextResponse.json({data,success})
}


export async function POST(request)
{
    await mongoose.connect(connectionStr);
    const payload=await request.json();
    const product=new Product(payload);
    const result=await product.save();
    return NextResponse.json({result,success:true})
}