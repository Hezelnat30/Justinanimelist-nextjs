import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeData, getRecommendedAnime } from "../apis/api";
export default async function Home() {
  const topAnime = await getAnimeData("top/anime", "limit=8");
  const recommendedAnime = await getRecommendedAnime(
    "recommendations/anime",
    "limit=8"
  );
  function generateRandomNumber() {
    let number1 = Math.floor(Math.random() * 200 - 8) + 1;
    let number2 = number1 + 8;

    return [number1, number2];
  }

  const [number1, number2] = generateRandomNumber();
  const limitRecommendedAnime = recommendedAnime.slice(number1, number2);

  return (
    <>
      <section className="container flex flex-col gap-3 p-4 sm:py-6 sm:px-0">
        <Header title="Popular Anime" linkTitle="See All" linkHref="/popular" />
        <AnimeList data={topAnime} />
      </section>
      <section className="container flex flex-col gap-3 p-4 sm:py-6 sm:px-0">
        <Header title="Reccomended Anime" />
        <AnimeList data={limitRecommendedAnime} />
      </section>
    </>
  );
}
