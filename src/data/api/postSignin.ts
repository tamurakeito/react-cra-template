import { client } from "data/axios";
import { AccountData } from "types/types";

export async function postSignIn(
  id: string,
  password: string
): Promise<AccountData | undefined> {
  const data = { id: id, password: password };
  try {
    const url = "/sign-in";
    const response = await client.post<AccountData>(url, data);

    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
