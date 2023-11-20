import mongoose from "mongoose";
import {connectionStr} from '../../../../database/connection';
import { NextResponse } from "next/server";
import { Product } from "@/database/model/product";
export async function PUT(req,res){
    const ProdId=res.params.productid;
    const filter={_id:ProdId};
    const data=await req.json();
    await mongoose.connect(connectionStr);
    const result=await Product.findOneAndUpdate(filter,data);
    return NextResponse.json({result,success:true})
}

export async function GET(req,res){
    const ProdId=res.params.productid;
    const filter={_id:ProdId};
    await mongoose.connect(connectionStr);
    const result=await Product.findById(filter);
    return NextResponse.json({result,success:true})
}

export async function DELETE(req,res){
    const prodId=res.params.productid;
    console.log(prodId);
    const filter={_id:prodId};
    await mongoose.connect(connectionStr);
    const result=await Product.deleteOne(filter);
    return NextResponse.json({result,success:true})
}