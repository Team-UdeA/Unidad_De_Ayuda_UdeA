import connectDB from "../../../lib/dbConnect";
import { NextResponse } from "next/server";
import { MaterialModel } from "../../../models/Material";


export const POST = async (req, res) => {
    await connectDB()
    try {
        const body = await req.json()
        const newRecurso = await MaterialModel.create(body)
        return NextResponse.json({data:newRecurso}, {status:201})
    } catch (error) {
        return NextResponse.json({data: null}, {status:500})
    }
}

export const GET = async () => {
    await connectDB
    try {
        const result = await MaterialModel.find({})
        return NextResponse.json({data:result}, {status:200})
    } catch (error) {
        return NextResponse.json({data: null}, {status:500})
    }
}
