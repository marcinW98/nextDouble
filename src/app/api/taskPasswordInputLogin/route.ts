import { authenticateUser } from "@/utils/authenticateUser";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const { username, filledFields } = await req.json();
    const isCorrectPassword = authenticateUser(username, filledFields);
    if (isCorrectPassword) {
        return NextResponse.json({message: "Correct password"})

    }
    else {
        return NextResponse.json({message: "Incorrect password"}, {status: 401})

    }
};
