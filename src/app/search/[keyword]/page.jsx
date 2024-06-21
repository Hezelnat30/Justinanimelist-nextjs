import { getAnimeData } from "@/app/apis/api";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
export default async function Page({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeData("anime", `q=${decodedKeyword}`);
  return (
    <>
      <section className="container flex flex-col gap-3 p-4 sm:py-6 sm:px-0">
        <Header title={`Search of ${decodedKeyword}`} linkTitle="See All" />
        <AnimeList data={searchAnime} />
      </section>
    </>
  );
}
