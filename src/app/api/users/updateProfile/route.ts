import { connect } from "@/dbConfig/dbConfig";
import Employer from '@/models/employerModels';
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();

        const {email, firstName,middleName,lastName,mobile} = reqBody.data;
        console.log("email::"+{email})

        // Checks if user exsits or not
        const employer = await Employer.findOne({email})

        if(!employer){
            return NextResponse.json({error:"Employer does not exist"},{status:400})
        }

        // Updating the details
        employer.email = email
        employer.firstName = firstName
        employer.middleName = middleName
        employer.lastName = lastName
        employer.mobile = mobile
        await employer.save();

        return NextResponse.json({
            message: "Details updated successfully",
            status: 200
        })


    } catch (error:any) {
        return NextResponse.json({ error:error.message},
            {status:500})
    }
}