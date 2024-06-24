import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeData,
  getRandomRecommendedAnime,
  getRecommendedAnime,
} from "@/libs/api-libs";

export default async function Home() {
  const topAnime = await getAnimeData("top/anime", "limit=8");
  const recommendedAnime = await getRecommendedAnime(
    "recommendations/anime",
    "entry"
  );

  const limitRecommendedAnime = getRandomRecommendedAnime(recommendedAnime, 4);

  return (
    <>
      <section className="container flex flex-col gap-3 p-4 pt-32 sm:pt-20 sm:px-0">
        <Header title="Popular Anime" linkTitle="See All" linkHref="/popular" />
        <AnimeList data={topAnime} />
      </section>
      <section className="container flex flex-col gap-3 p-4 pt-10 sm:px-0">
        <Header title="Reccomended Anime" />
        <AnimeList data={limitRecommendedAnime} />
      </section>
    </>
  );
}
