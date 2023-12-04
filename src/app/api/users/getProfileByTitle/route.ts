import { connect } from "@/dbConfig/dbConfig";
import PostedProfile from "@/models/postProfileModels";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { role } = reqBody;
    console.log(reqBody);

    let postedProfile = await PostedProfile.find({ role: role });

    if (postedProfile.length === 0) {
        postedProfile = await PostedProfile.find({ address: role });
    }

    return NextResponse.json({
      message: "profile found",
      data: postedProfile,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
