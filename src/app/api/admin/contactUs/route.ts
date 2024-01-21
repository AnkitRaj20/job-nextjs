import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Contact from "@/models/contactUs.model"
connect();

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const {fullName, email, message} = reqBody;

        const newContact = new Contact({
            fullName,
            email,
            message
        })

        const savedContact = await newContact.save();
      
        return NextResponse.json({
            message: 'Message Sent Successfully',
            success: true,
            savedContact
        })
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}