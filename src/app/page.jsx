import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeData } from "./apis/api";
export default async function Home() {
  const topAnime = await getAnimeData("top/anime", "limit=8");

  return (
    <section className="container flex flex-col gap-3 p-4 sm:py-6 sm:px-0">
      <Header title="Popular Anime" linkTitle="See All" linkHref="/popular" />
      <AnimeList data={topAnime} />
    </section>
  );
}
