import { connect } from "@/dbConfig/dbConfig";
import PostedJob from "@/models/postJobModels";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request: NextRequest) {
    try {
      const reqBody = await request.json();
      
      const {_id} = reqBody;
      console.log(_id);

      // Checks if user exsits or not
      const job = await PostedJob.findOne({_id});

      if(!job){
        return NextResponse.json({error:"Job does not exist"},{status:400})
    }

    const response = NextResponse.json({
        message: 'Data found successfully',
        success: true,
        data: job
    })

    return response
    } catch (error:any) {
        return NextResponse.json({ error:error.message},
            {status:500})
    }
}