import { request } from "http";
import connectDB from "../../../../lib/dbConnect";
import { MaterialModel } from "../../../../models/Material";
import { NextResponse } from "next/server";

//mostar un documento
export const GET = async (request, {params}) => {
    await connectDB()
    const id = params.id
    try {
        const result = await MaterialModel.findById(id)
        return NextResponse.json({data:result}, {status:200})
    } catch (error) {
        return NextResponse.json({data: null}, {status:500})
    }
}

//eliminar documento
export const DELETE = async(request, {params}) => {
    await connectDB()
    const id =params.id
    try {
        const result = await MaterialModel.findByIdAndDelete(id)
        if(!result){
            return NextResponse.json({message: `Document whit ID: ${id} not found`}, {status:404});
        }
        return NextResponse.json({data: result}, {status: 200});
    } catch (error) {
        return NextResponse.json({data: null}, {status: 500});
    }
}

//actualizar documento
export const PUT = async (request, {params}) => {
    await connectDB()
    const id = params.id
    const body = await request.json()
    try {
        const result = await MaterialModel.findByIdAndUpdate(id, {$set:{...body}}, {new:true})
        if(!result){
            return NextResponse.json({message: `Document whit ID: ${id} not found`}, {status:404});
        }
        return NextResponse.json({data:result}, {status:200})
    } catch (error) {
        return NextResponse.json({data: null}, {status: 500})
    }
}