import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModels';
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();

        const {email, firstName,middleName,lastName,mobile} = reqBody.data;
        console.log("email::"+{email})

        // Checks if user exsits or not
        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({error:"User does not exist"},{status:400})
        }

        // Updating the details
        user.email = email
        user.firstName = firstName
        user.middleName = middleName
        user.lastName = lastName
        user.mobile = mobile
        await user.save();

        return NextResponse.json({
            message: "Details updated successfully",
            status: 200
        })


    } catch (error:any) {
        return NextResponse.json({ error:error.message},
            {status:500})
    }
}