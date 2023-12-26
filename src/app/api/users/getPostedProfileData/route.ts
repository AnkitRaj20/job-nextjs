import { connect } from "@/dbConfig/dbConfig";
import PostedProfile from '@/models/postProfileModels';
import User from '@/models/userModels';
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const {_id} = reqBody;
        // Checks if user exsits or not
        const user = await User.findOne({_id})

        if(!user){
            return NextResponse.json({error:"User does not exist"},{status:400})
        }

        const postedProfile = await PostedProfile.find({userId:_id})

        return NextResponse.json({
            message: "job found",
            data: postedProfile
          })

    } catch (error:any) {
        return NextResponse.json({ error:error.message},
            {status:500})
    }
}