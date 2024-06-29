import { authServerSession } from "@/libs/authServer-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";

export default async function CommentBox({ anime_mal_id }) {
  const user = await authServerSession();
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className="px-6 container md:px-20 py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="grid grid-cols-[auto,1fr] gap-4 pt-4 pb-2 border-b border-gray-200"
          >
            <Image
              src={user.image}
              width={48}
              height={48}
              className="rounded-full"
              alt="User Image"
            />
            <div className="w-full cursor-pointer">
              <div className="flex items-center space-x-2">
                <p className="font-bold tracking-wide text-color-secondary">
                  {comment.username}
                </p>
                <span className="text-sm text-slate-400">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-color-accent-200 font-semibold">
                Title : {comment.anime_title}
              </p>
              <p className="text-color-accent-100  italic">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
