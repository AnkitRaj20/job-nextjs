import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { email, password } = reqBody;
    // console.log(reqBody);

    const lowerEmail = email.toLowerCase();
    // Checks if user exsits or not
    const user = await User.findOne({ email: lowerEmail });

    if (!user) {
      return NextResponse.json({ error: lowerEmail }, { status: 400 });
    }

    // Check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json({ error: "Invalid Password " }, { status: 400 });
    }

    const isUser = user.isUser;

    // =========TOKEN=============

    // create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // Create a new token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login successfully",
      success: true,
      userId: tokenData.id,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });
    response.cookies.set("isUser", isUser, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
