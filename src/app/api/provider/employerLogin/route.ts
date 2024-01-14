import { connect } from "@/dbConfig/dbConfig";
import Employer from '@/models/employerModels';
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'
import toast from "react-hot-toast";

connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();

        const {email, password} = reqBody;
        console.log(reqBody)

        // Checks if user exsits or not
        const employer = await Employer.findOne({email})

        if(!employer){
            return NextResponse.json({error:"Employer does not exist"},{status:400})
        }

        // Check if password is correct
        const validPassword = await bcryptjs.compare(password, employer.password)

        if(!validPassword) {
            return NextResponse.json({error:"Invalid Password "},{status:400})
        }

        const isEmployer = employer.isEmployer;

        // =========TOKEN=============

        // create token data
        const tokenData={
            id: employer._id,
            username: employer.username,
            email: employer.email
        }

        // Create a new token
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn: "1d"})

        const response = NextResponse.json({
            message: 'Login successfully',
            success: true,
            userId: tokenData.id
        })

        response.cookies.set("token", token,{
            httpOnly: true
        })
        response.cookies.set("isEmployer", isEmployer,{
            httpOnly: true
        })

        return response

    } catch (error:any) {
        return NextResponse.json({ error:error.message},
            {status:500})
    }
}