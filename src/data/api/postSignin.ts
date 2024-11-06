import { client } from "data/axios";
import { Account } from "types/types";

export async function postSignIn(
  userId: string,
  password: string
): Promise<Account | undefined> {
  const data = { user_id: userId, password: password };
  try {
    const url = "/sign-in";
    const response = await client.post<{
      id: number;
      user: string;
      token: string;
    }>(url, data);

    const account: Account = {
      id: response.data.id,
      user: response.data.user,
      token: response.data.token,
    };

    return account;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
