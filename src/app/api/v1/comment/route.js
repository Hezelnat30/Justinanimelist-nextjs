import prisma from "@/libs/prisma";

export async function POST(req) {
  const { anime_mal_id, user_email, comment, username } = await req.json();
  console.log({ anime_mal_id, user_email, comment, username });
  const data = {
    anime_mal_id,
    user_email,
    comment,
    username,
  };
  const createComment = await prisma.comment.create({ data });
  if (!createComment) {
    return new Response(JSON.stringify({ status: 500, isCreated: false }));
  } else {
    return new Response(JSON.stringify({ status: 200, isCreated: true }));
  }
}
