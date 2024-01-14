import { connect } from "@/dbConfig/dbConfig";
import Employer from '@/models/employerModels';
import PostJob from '@/models/postJobModels';
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {employerId,employerName,role,location,education,experience,salary,mobile,english,jobType} = reqBody

        console.log(reqBody);
        
        // check if user exists or not
        const employee = await Employer.findOne({_id:employerId})

        if(!employee){
            return NextResponse.json(
                {error: 'Employee not found'},
                {status: 400}
                )
        }

        

        const newJob = new PostJob({
            employerId,
            employerName,
            role:role.toLowerCase(),
            location:location.toLowerCase(),
            education,
            mobile,
            experience,
            salary,
            english,
            jobType
        })

        const savedJob = await newJob.save();
        console.log(savedJob)
        
      
        return NextResponse.json({
            message: 'Job Posted successfully',
            success: true,
            savedJob
        })

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}