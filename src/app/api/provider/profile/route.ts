import { connect } from "@/dbConfig/dbConfig";
import Employer from '@/models/employerModels';
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();

        const {_id} = reqBody;
        //console.log(reqBody)

        // Checks if user exsits or not
        const employer = await Employer.findOne({_id})

        if(!employer){
            return NextResponse.json({error:"Employer does not exist"},{status:400})
        }

      
        const response = NextResponse.json({
            message: 'Data found successfully',
            success: true,
            id: employer._id,
            firstName: employer.firstName,
            middleName: employer.middleName,
            lastName: employer.lastName,
            email: employer.email,
            mobile: employer.mobile
        })

        return response

    } catch (error:any) {
        return NextResponse.json({ error:error.message},
            {status:500})
    }
}