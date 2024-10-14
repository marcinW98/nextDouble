import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
const SECRET_KEY = "secretKey";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json(); // Odczytujemy dane JSON

    if (username === "admin" && password === "password") {
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });

      const res = NextResponse.json({ message: "Logged in successfully" });
      res.cookies.set("token", token, {
        httpOnly: true,
        maxAge: 3600,
        path: "/",
      });
      return res;
    } else {
      return NextResponse.json({ message: "Invalid login or password" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ message: "An error occurred during login" }, { status: 500 });
  }
}
