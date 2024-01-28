import { connect } from "@/dbConfig/dbConfig";
import Profile from '@/models/postProfileModels';
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const {id} = reqBody.modal;
        const { role,location,education,experience,english,mobile,salary,jobType} = reqBody.updateData;
        const {name} = reqBody
        // console.log("id::"+{id})
        // console.log("name::"+name)

        // Checks if user exsits or not
        const profile = await Profile.findOne({_id:id})

        if(!profile){
            return NextResponse.json({error:"profile does not exist"},{status:400})
        }

        // Updating the details
        profile.userName = name
        profile.role = role
        profile.address = location
        profile.education = education
        profile.experience = experience
        profile.mobile = mobile
        profile.english = english
        profile.salary = salary
        profile.jobType = jobType
        await profile.save();

        return NextResponse.json({
            message: "Profile Details updated successfully",
            status: 200
        })


    } catch (error:any) {
        return NextResponse.json({ error:error.message},
            {status:500})
    }
}