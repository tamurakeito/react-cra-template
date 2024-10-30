import { client } from "data/axios";

export async function deleteExample(id: number): Promise<number | undefined> {
  try {
    const url = `/delete-example/${id}`;
    const response = await client.delete(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
