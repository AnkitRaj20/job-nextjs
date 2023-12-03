import { connect } from "@/dbConfig/dbConfig";
import PostedProfile from "@/models/postProfileModels";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function GET() {
  try {
    const postedProfile = await PostedProfile.find();

    return NextResponse.json({
      message: "job found",
      data: postedProfile,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
