import { NextResponse } from "next/server";

export async function GET(){
    try {
        const response = NextResponse.json({
            message: "Logout successfully",
            success: true
        })

        // Clearing the cookies
        response.cookies.set("token", "",{
            httpOnly: true,
            expires: new Date(0)
        })
        response.cookies.set("isUser", "",{
            httpOnly: true,
            expires: new Date(0)
        })
        response.cookies.set("isEmployer", "",{
            httpOnly: true,
            expires: new Date(0)
        })
        

        return response;

    } catch (error:any) {
        NextResponse.json({error:error.message},{status:500})
    }
}