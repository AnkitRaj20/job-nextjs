import { connect } from "@/dbConfig/dbConfig";
import PostedJob from "@/models/postJobModels";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function GET() {
  try {
    const postedJob = await PostedJob.find();

    return NextResponse.json({
      message: "job found",
      data: postedJob,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
