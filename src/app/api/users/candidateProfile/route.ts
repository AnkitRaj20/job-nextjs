import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModels';
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();

        const {_id} = reqBody;
        // console.log(reqBody)

        // Checks if user exsits or not
        const user = await User.findOne({_id})

        if(!user){
            return NextResponse.json({error:"User does not exist"},{status:400})
        }

      
        const response = NextResponse.json({
            message: 'Data found successfully',
            success: true,
            data: user
        })

        return response

    } catch (error:any) {
        return NextResponse.json({ error:error.message},
            {status:500})
    }
}