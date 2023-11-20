import { User } from "@/util/db";
import { NextResponse } from "next/server";


export function GET(req,res){
    console.log(res);
    const UserData=User.find(a=>a.id==res.params.id)
    return NextResponse.json(UserData.length==0?{Response:"No Data Found",Success:false}:{data:UserData,Success:true})
}

export async function PUT(req,res){
    const payload=await req.json();
    const userId=res.params.id;
    payload.id=userId;
    if(!payload.id||!payload.name||!payload.age||!payload.email)
    {
        return NextResponse.json({result:"Request data is not valid",success:false},{status:400})
    }
    else
    {
        return NextResponse.json({result:payload,success:true},{status:200})
    }
}

export function DELETE(req,res){
    const id=res.params.id;
    console.log(id);
    if( id)
    {
        return NextResponse.json({result:"UserDelted",success:true})
    }
    else
    {
        return NextResponse.json({result:"Something wen wrong",success:false})
    }
   
}