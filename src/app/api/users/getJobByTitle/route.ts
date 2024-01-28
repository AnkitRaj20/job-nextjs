import { connect } from "@/dbConfig/dbConfig";
import PostedJob from "@/models/postJobModels";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { role } = reqBody;
    // console.log(reqBody);

    let postedJob = await PostedJob.find({ role: role });

    if (postedJob.length === 0) {
        postedJob = await PostedJob.find({ location: role });
    }

    return NextResponse.json({
      message: "job found",
      data: postedJob,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
