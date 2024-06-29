import CommentBox from "@/components/AnimeList/CommentBox";
import CommentInput from "@/components/AnimeList/CommentInput";
import WatchlistButton from "@/components/AnimeList/WatchlistButton";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { getAnimeData } from "@/libs/api-libs";
import { authServerSession } from "@/libs/authServer-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
export default async function Page({ params }) {
  const { id } = params;
  const animeById = await getAnimeData(`anime/${id}`);
  const user = await authServerSession();
  const collection = await prisma.collection.findFirst({
    where: {
      user_email: user?.email,
      anime_mal_id: id,
    },
  });

  return (
    <section
      id="detail-anime"
      className="container pt-40 pb-10 md:pt-16 flex flex-wrap w-full mx-auto justify-center items-center"
    >
      <div className="w-full md:w-4/5 lg:w-2/5 px-8 md:px-10 py-5 self-start">
        <h1 className="uppercase text-center lg:text-start lg:hidden font-extrabold md:text-4xl text-2xl sm:text-3xl text-color-accent-100 mb-8">
          {animeById.title} - {animeById.year}
        </h1>
        <div className="relative overflow-hidden rounded-xl w-full md:w-2/4 lg:w-4/5 shadow-images-shadow hover:shadow-sm mt-7 mx-auto transition-all ease-in-out hover:scale-105">
          <Image
            src={animeById.images.webp.image_url}
            alt={animeById.title}
            width={500}
            height={500}
            className="w-full h-full object-fill  transition-all"
          />
          {!collection && (
            <WatchlistButton
              user_email={user?.email}
              anime_mal_id={id}
              anime_image={animeById.images.webp.image_url}
              anime_title={animeById.title}
            />
          )}
        </div>
      </div>
      <div className="w-full md:w-4/5 lg:w-3/5 self-start px-6 pt-4 md:pt-10 md:px-10 ">
        <h1 className="uppercase hidden lg:block font-extrabold text-5xl text-color-accent-100">
          {animeById.title} - {animeById.year}
        </h1>
        <p className="text-color-secondary text-base lg:text-xl text-justify">
          {animeById.synopsis}
        </p>
        <div className="grid grid-cols-2 mt-2 lg:grid-cols-4 gap-2 text-color-secondary">
          <p className="border-3 border-color-accent-100 rounded px-3 py-1">
            <span className="font-semibold">Total Episode :</span>{" "}
            {animeById.episodes}
          </p>
          <p className="border-3 border-color-accent-100 rounded px-3 py-1">
            <span className="font-semibold">Score :</span> {animeById.score}/10
          </p>
          <p className="border-3 border-color-accent-100 rounded px-3 py-1">
            <span className="font-semibold">Rating :</span> {animeById.rating}
          </p>
          <p className="border-3 border-color-accent-100 rounded px-3 py-1">
            <span className="font-semibold">Status :</span> {animeById.status}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col">
        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={animeById.title}
          />
        )}
        <CommentBox anime_mal_id={id} />
      </div>
      <VideoPlayer youtubeId={animeById.trailer.youtube_id} />
    </section>
  );
}
