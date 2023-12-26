import { connect } from "@/dbConfig/dbConfig";
import Profile from '@/models/postProfileModels';
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();

        const {_id} = reqBody;
        console.log("id::"+{_id})

        // const job = await Job.findOne({_id})
        
        // Checks if job exsits or not
        const delProfile = await Profile.findByIdAndDelete({_id})

        if(!delProfile){
            return NextResponse.json({error:"Profile does not exist"},{status:400})
        }

        return NextResponse.json({
            message: "Profile deleted successfully",
            status: 200
        })


    } catch (error:any) {
        return NextResponse.json({ error:error.message},
            {status:500})
    }
}