import { connect } from "@/dbConfig/dbConfig";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request: NextRequest) {
  try {
  const reqBody = await request.json();
  const {endpoint} = reqBody; 
  const { job_id } =  reqBody.queryList;
  
  console.log(reqBody.queryList);
    const options = {
      method: "GET",
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      params: {
        job_id: job_id
      },
      headers: {
        "X-RapidAPI-Key": "b2f9612b21msh614f9a4d2cc86b4p12e5e4jsn70b5418803dc",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
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
