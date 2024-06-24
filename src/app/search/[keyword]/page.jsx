import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeData } from "@/libs/api-libs";
export default async function Page({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeData("anime", `q=${decodedKeyword}`);
  return (
    <>
      <section className="container flex flex-col gap-3 p-4 sm:pt-20 sm:px-0">
        <Header title={`Search of ${decodedKeyword}`} linkTitle="See All" />
        <AnimeList data={searchAnime} />
      </section>
    </>
  );
}
