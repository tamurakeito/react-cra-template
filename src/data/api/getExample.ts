import { client } from "data/axios";

export async function getExample(id: number): Promise<string | undefined> {
  try {
    const url = `/example/${id}`;
    const response = await client.get<string>(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
