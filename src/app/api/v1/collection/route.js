import prisma from "@/libs/prisma";

export async function POST(req) {
  try {
    const { anime_mal_id, user_email, anime_image, anime_title } =
      await req.json();

    const createCollection = await prisma.collection.create({
      data: { anime_mal_id, user_email, anime_image, anime_title },
    });

    if (!createCollection) {
      console.error("Failed to create collection");
      return new Response(JSON.stringify({ status: 500, isCreated: false }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ status: 200, isCreated: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error); // Logging for debugging
    return new Response(JSON.stringify({ status: 500, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
