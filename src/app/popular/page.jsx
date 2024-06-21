"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeData, getAnimePagination } from "../../apis/api";
import Loading from "../loading";

export default function Page() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  async function getPopularAnime() {
    try {
      const animeData = await getAnimeData("top/anime", `page=${page}`);
      const animePagination = await getAnimePagination("top/anime", page);
      setTopAnime(animeData);
      setPagination(animePagination);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getPopularAnime();
  }, [page]);

  return (
    <section className="container p-4 sm:py-6 sm:px-0">
      <HeaderMenu title={`All Popular Anime #${page}`} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <AnimeList data={topAnime} />
          <Pagination
            page={page}
            lastPage={pagination?.last_visible_page}
            setPage={setPage}
          />
        </>
      )}
    </section>
  );
}
