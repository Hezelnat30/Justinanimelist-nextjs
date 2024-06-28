import Header from "@/components/Dashboard/Header";
import { authServerSession } from "@/libs/authServer-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await authServerSession();
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user?.email,
    },
  });

  return (
    <section className="container pt-28">
      <Header title="My Collection" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((item, index) => (
          <Link
            key={index}
            href={`/anime/${item.anime_mal_id}`}
            className="relative border-2 border-color-accent-100"
          >
            <Image
              src={item.anime_image}
              alt={item.anime_title}
              width={350}
              height={350}
              className="w-full"
            />
            <div className="absolute flex justify-center items-center w-full bottom-0 bg-color-accent-200 h-14">
              <h5 className="text-xl text-center">{item.anime_title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
