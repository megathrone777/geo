import { type NextRequest } from "next/server";

export const POST = async (request: NextRequest): Promise<Response> => {
  const data = await request.json();

  console.log(data);

  return Response.json({ name: "Hello" });
};
