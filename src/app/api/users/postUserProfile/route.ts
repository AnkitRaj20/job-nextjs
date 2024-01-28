import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModels';
import PostProfile from '@/models/postProfileModels';
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();

        const {id,firstName,middleName,lastName,mobile,address,gender} = reqBody.data;
        const {role,education,experience,english,jobType,salary} = reqBody.postProfile;
        // console.log(reqBody)

        const name = firstName + ' ' + middleName + ' ' + lastName; 


        // Checks if user exsits or not
        const user = await User.findOne({ _id:id})

        if(!user){
            return NextResponse.json({error:"User does not exist"},{status:400})
        }

      
        const newProfile = new PostProfile({
            userId:id,
            userName:name,
            role:role.toLowerCase(),
            education,
            mobile,
            experience,
            salary,
            english,
            jobType:jobType.toLowerCase(),
            address:address.toLowerCase(),
            gender
        })

        const savedProfile = await newProfile.save();
        // console.log(savedProfile)
        
      
        return NextResponse.json({
            message: 'Profile Posted successfully',
            success: true,
            savedProfile
        })

    } catch (error:any) {
        return NextResponse.json({ error:error.message},
            {status:500})
    }
}