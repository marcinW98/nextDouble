import { getPasswordLength } from "@/utils/getPasswordLength";
import {passwordInput} from "../../../../data.json";
import { NextResponse } from "next/server";
export async function GET(){
    try {
        const passwordLength = getPasswordLength(passwordInput.password);
        return NextResponse.json({ passwordLength });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        return NextResponse.json({message: `Error: ${errorMessage} `}, {status: 500})
    }
};