import { NextResponse } from "next/server";

export async function GET(request:Request,{params}:{params:{id:string}})
{
    const {id}=params ;
    return NextResponse.json({
        todo:'Todo 1'+id 
    })
}

export async function DELETE(){
    return NextResponse.json({response:"true"})
}