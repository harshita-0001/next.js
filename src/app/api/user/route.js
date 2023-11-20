import { NextResponse } from "next/server";
import { User } from "../../../util/db";


export function GET(req,res){
    return NextResponse.json({data:User,success:true},{status:200})
}

export async function POST(req)
{
   const postUser=await req.json();
    if(!postUser.name||!postUser.email||!postUser.age)
    {
            return NextResponse.json({Respons:"Please Send Data",success:false},{status:400})
    }
    
    return NextResponse.json({data:"Data Added",success:true},{status:200})
}