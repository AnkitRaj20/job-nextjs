import { connect } from "@/dbConfig/dbConfig";
import PostedJob from '@/models/postJobModels';
import Employer from '@/models/employerModels';
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const {_id} = reqBody;
        console.log(reqBody)
        // Checks if user exsits or not
        const employer = await Employer.findOne({_id})

        if(!employer){
            return NextResponse.json({error:"Employer does not exist"},{status:400})
        }

        const postedJob = await PostedJob.find({employerId:_id})

        return NextResponse.json({
            message: "job found",
            data: postedJob
          })

    } catch (error:any) {
        return NextResponse.json({ error:error.message},
            {status:500})
    }
}