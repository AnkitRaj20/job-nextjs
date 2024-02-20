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
    const { query, page, num_pages,date_posted } = reqBody.queryList;

    const options = {
      method: "GET",
      url: `https://${process.env.RAPID_API_HOST}/${endpoint}`,
      params: {
        query: `${query} in india`,
        page: page,
        num_pages: num_pages,
        date_posted : date_posted
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
