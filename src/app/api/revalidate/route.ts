import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const body = await req.json();

  if (typeof body.path !== "string") {
    return new Response(null, {
      status: 400,
    });
  }

  revalidatePath(body.path);

  return new Response(null, {
    status: 200,
  });
}

