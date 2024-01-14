import { connect } from "@/dbConfig/dbConfig";
import Job from '@/models/postJobModels';
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const {id,employerId} = reqBody.modal;
        const { role,location,education,experience,english,mobile,salary,jobType} = reqBody.updateData;
        const {name} = reqBody
        console.log("id::"+{id})
        console.log("name::"+name)

        // Checks if user exsits or not
        const job = await Job.findOne({_id:id})

        if(!job){
            return NextResponse.json({error:"job does not exist"},{status:400})
        }

        // Updating the details
        job.employerId = employerId
        job.employerName = name
        job.role = role
        job.location = location
        job.education = education
        job.experience = experience
        job.mobile = mobile
        job.english = english
        job.salary = salary
        job.jobType = jobType
        await job.save();

        return NextResponse.json({
            message: "Details updated successfully",
            status: 200
        })


    } catch (error:any) {
        return NextResponse.json({ error:error.message},
            {status:500})
    }
}