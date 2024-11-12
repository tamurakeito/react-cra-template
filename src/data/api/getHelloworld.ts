import { client } from "data/axios";

export async function getHelloworld(id: number): Promise<string | undefined> {
  try {
    const url = `/hello-world/${id}`;
    const response = await client.get<string>(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
