// Getting the user data from token
import {getDataFromToken} from "@/helper/getDataFromToken";

import {NextRequest,NextResponse} from 'next/server';
import Employee from "@/models/employerModels";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request:NextRequest){
    try {
      const userId= await getDataFromToken(request);
      // console.log(userId)
      const employee = await Employee.findOne({_id: userId}).select("-password -isAdmin");
      // console.log("user::"+employee)
      
      return NextResponse.json({
        message: "employee found",
        data: employee
      })
    } catch (error:any) {
        return NextResponse.json(
            {error: error.message},
            {status: 400}
            )
    }
}