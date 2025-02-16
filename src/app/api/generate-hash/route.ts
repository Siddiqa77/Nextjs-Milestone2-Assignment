import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { userId } = await req.json(); // Get userId from request body
    const secret = process.env.CHATBASE_SECRET || "your-secret-key"; // Load from .env

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // Generate the HMAC SHA-256 hash
    const hash = crypto.createHmac("sha256", secret).update(userId).digest("hex");

    return NextResponse.json({ hash }, { status: 200 });
  } catch  {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
  
}
