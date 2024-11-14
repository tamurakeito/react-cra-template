import { client } from "data/axios";
import { SignInResponse, ErrorResponse } from "data/utils/typeGuards";

export async function PostSignIn(
  userId: string,
  password: string
): Promise<SignInResponse | ErrorResponse | undefined> {
  const data = { user_id: userId, password: password };
  try {
    const url = "/sign-in";
    const response = await client.post(url, data);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      return undefined;
    }
  }
}

export const postSignInErrors = {
  notFound: "user not found",
  unauthorized: "invalid password",
} as const;
export type PostSignInErrors =
  (typeof postSignInErrors)[keyof typeof postSignInErrors];
