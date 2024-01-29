import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helper/mailer";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { email } = reqBody;
    console.log(reqBody);

    const lowerEmail = email.toLowerCase();
    // Checks if user exsits or not
    const user = await User.findOne({ email: lowerEmail });

    if (!user) {
      return NextResponse.json(
        { error: "User does not exists" },
        { status: 400 }
      );
    }
      // Send verification email
      await sendEmail({
        email,
        emailType: 'RESET',
        userId: user._id
    })

    const response = NextResponse.json({
      message: "Email Sent",
      success: true,
      data: email,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
