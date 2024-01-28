import { connect } from "@/dbConfig/dbConfig";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { ConfigModule } from '@nestjs/config';
connect();

ConfigModule.forRoot();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { endpoint } = reqBody;
    const { job_id } = reqBody.queryList;

    console.log(reqBody.queryList);
    const options = {
      method: "GET",
      url: `https://${process.env.RAPID_API_HOST}/${endpoint}`,
      params: {
        job_id: job_id
      },
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.RAPID_API_HOST,
      },
    };
    const response = await axios.request(options);
    const data = await response.data.data;

    return NextResponse.json({
      message: "job found",
      data: data,
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
