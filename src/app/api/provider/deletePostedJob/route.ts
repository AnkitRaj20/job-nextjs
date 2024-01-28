import { connect } from "@/dbConfig/dbConfig";
import Job from "@/models/postJobModels";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { _id } = reqBody;
    // console.log("id::"+{_id})

    // const job = await Job.findOne({_id})

    // Checks if job exsits or not
    const delJob = await Job.findByIdAndDelete({ _id });

    if (!delJob) {
      return NextResponse.json(
        { error: "Job does not exist" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: "Job deleted successfully",
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
