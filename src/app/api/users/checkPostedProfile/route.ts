import { connect } from "@/dbConfig/dbConfig";
import Profile from '@/models/postProfileModels';
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST (request: NextRequest){
    try {
        const reqBody = await request.json();
        const {_id} =  reqBody;

        const profile = await Profile.findOne({userId:_id})

        if(!profile){
            return NextResponse.json({
                message: "No profile found",
                data: false
            })
        }else{
            return NextResponse.json({
                message: "Profile found",
                data: true
            })
        }


    } catch (error:any) {
        return NextResponse.json({ error:error.message},
            {status:500})
    }
}