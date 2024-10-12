import { NextApiRequest } from "next";

export interface SignInRequest extends NextApiRequest {
    body: {
        username: string;
        password: string;
      };
}