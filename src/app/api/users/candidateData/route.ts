// Getting the user data from token
import {getDataFromToken} from "@/helper/getDataFromToken";

import {NextRequest,NextResponse} from 'next/server';
import User from "@/models/userModels";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request:NextRequest){
    try {
      const userId= await getDataFromToken(request);
      // console.log(userId)
      const user = await User.findOne({_id: userId}).select("-password -isAdmin");
      // console.log("user::"+user)
      
      return NextResponse.json({
        message: "employee found",
        data: user
      })
    } catch (error:any) {
        return NextResponse.json(
            {error: error.message},
            {status: 400}
            )
    }
}