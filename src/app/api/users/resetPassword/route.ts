import  bcryptjs  from 'bcryptjs';
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const token = reqBody.tokenData;
        const password = reqBody.data.password;
        
        console.log(password)

        const user = await User.findOne({
            forgotPasswordToken: token,
            forgotPasswordTokenExpiry: {$gt: Date.now()}
        })

        // If User not found
        if(!user){
            return NextResponse.json({
                error: "User not found",
                status: 400
              })
        }

        console.log("user found"+user);

        // Hashing the new password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Updating the password
        user.password = hashedPassword
        user.forgotPasswordToken =undefined
        user.forgotPasswordTokenExpiry = undefined
        await user.save();


        return NextResponse.json({
            message: "Password updated successfully",
            status: 200
        })

        

    } catch (error:any) {
        return NextResponse.json({
          error: error.message,
          status: 400
        })
    }
}