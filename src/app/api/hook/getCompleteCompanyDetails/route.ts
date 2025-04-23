import { connect } from "@/dbConfig/dbConfig";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { ConfigModule } from "@nestjs/config";
import { getApiKeys } from "../getJob/route";
connect();

ConfigModule.forRoot();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { endpoint } = reqBody;
    const { job_id } = reqBody.queryList;

    // Dynamically get the list of API keys from environment variables
    const apiKeys = getApiKeys();
    // Loop through the API keys and attempt the request
    for (let i = 0; i < apiKeys.length; i++) {
      const apiKey = apiKeys[i];
      //console.log(reqBody.queryList);
      const options = {
        method: "GET",
        url: `https://${process.env.RAPID_API_HOST}/${endpoint}`,
        params: {
          job_id: job_id,
        },
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": process.env.RAPID_API_HOST,
        },
      };

      try {
        // Try to send the request with the current API key
        const response = await axios.request(options);
        const data = await response.data.data;

        // If successful, return the data
        return NextResponse.json({
          message: "Job found",
          data: data,
        });
      } catch (error: any) {
        if (error.response && error.response.status === 429) {
          // If error is 429 (rate-limit), try the next API key
          console.log(
            `Rate limit exceeded with API Key ${apiKey}. Trying next key...`
          );
          continue; // Proceed to the next API key
        } else {
          // If another error occurs, break the loop and return the error response
          return NextResponse.json({ error: error.message }, { status: 500 });
        }
      }
    }

    // const response = await axios.request(options);
    // const data = await response.data.data;

    // return NextResponse.json({
    //   message: "job found",
    //   data: data,
    // });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
