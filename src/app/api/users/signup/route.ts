import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModels';
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helper/mailer";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {firstName,middleName,lastName,email,password,mobile,gender,address} = reqBody

        const lowerCaseAddress = address.toLowerCase();
        const lowerEmail = email.toLowerCase();
        // console.log(reqBody);
        
        // check if user exists or not
        const user = await User.findOne({email:lowerEmail})
        const userMob = await User.findOne({mobile});

        if(user){
            return NextResponse.json(
                {error: 'User already exists'},
                {status: 400}
                )
        }
        if(userMob){
            return NextResponse.json(
                {error: 'This number is already in use'},
                {status: 400}
                )
        }

        // Hashing Password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            firstName,
            middleName,
            lastName,
            mobile,
            email:lowerEmail,
            gender,
            address:lowerCaseAddress,
            password:hashedPassword
        })

        const savedUser = await newUser.save();
        // console.log(savedUser)
        
        // Send verification email
        await sendEmail({
            email,
            emailType: 'VERIFY',
            userId: savedUser._id
        })

        return NextResponse.json({
            message: 'User created successfully',
            success: true,
            savedUser
        })

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}