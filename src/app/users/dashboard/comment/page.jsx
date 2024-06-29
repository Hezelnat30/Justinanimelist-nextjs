import Header from "@/components/Dashboard/Header";
import { authServerSession } from "@/libs/authServer-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function page() {
  const user = await authServerSession();
  const comments = await prisma.comment.findMany({
    where: { username: user.name },
  });
  console.log({ user, comments });
  return (
    <section className="container pt-32" id="comment">
      <Header title="My Comments" />
      {comments.length > 0 ? (
        comments.map((comment) => (
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
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              className="w-full cursor-pointer"
            >
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
            </Link>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-96 ">
          <p className="text-2xl text-color-secondary">No comments found</p>
          <p className="text-color-accent-100">
            Start adding comments on your favorite anime!
          </p>
        </div>
      )}
    </section>
  );
}
