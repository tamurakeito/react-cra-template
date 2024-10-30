import { client } from "data/axios";

export async function postAddMemo(data: string): Promise<string | undefined> {
  try {
    const url = `/post-example`;
    const response = await client.post<string>(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
