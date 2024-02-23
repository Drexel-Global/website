import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { captcha } = await req.json();
  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`
    );
    const captchaValidation = await response.json();
    if (captchaValidation.success) {
      return NextResponse.json(
        {
          message: "OK",
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      {
        message: "NOT OK",
      },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
}
