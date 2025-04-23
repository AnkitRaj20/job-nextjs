import { connect } from "@/dbConfig/dbConfig";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { ConfigModule } from "@nestjs/config";
connect();

ConfigModule.forRoot();

// Function to retrieve all API keys dynamically from environment variables
export const getApiKeys = (): string[] => {
  // Filter out environment variables that match the "RAPID_API_KEY_" pattern
  const apiKeys = Object.keys(process.env)
    .filter((key) => key.startsWith("RAPID_API_KEY_"))
    .map((key) => process.env[key] as string);

  return apiKeys;
};

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { endpoint } = reqBody;
    const { query, page, num_pages, date_posted } = reqBody.queryList;

    // Dynamically get the list of API keys from environment variables
    const apiKeys = getApiKeys();

    // Loop through the API keys and attempt the request
    for (let i = 0; i < apiKeys.length; i++) {
      const apiKey = apiKeys[i];

      // Log the API key that is being used
      console.log(`Using API Key: ${apiKey} (Key Index: ${i + 1})`);

      const options = {
        method: "GET",
        url: `https://${process.env.RAPID_API_HOST}/${endpoint}`,
        params: {
          query: `${query} in india`,
          page: page,
          num_pages: num_pages,
          date_posted: date_posted,
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

    // If all API keys are exhausted or failed
    return NextResponse.json(
      { error: "All API keys exceeded rate limits" },
      { status: 429 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
