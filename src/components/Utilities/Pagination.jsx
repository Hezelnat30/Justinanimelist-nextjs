import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";

export default function Pagination({ page, lastPage, setPage }) {
  function nextPage() {
    if (page <= lastPage) {
      setPage((page) => page + 1);
    }
    scrollTop();
  }

  function prevPage() {
    if (page > 1) {
      setPage((page) => page - 1);
    }
    scrollTop();
  }

  function scrollTop() {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }

  return (
    <div className="w-4/5 sm:w-2/4 lg:w-2/5 xl:w-1/3 rounded-full mx-auto bg-color-primary flex items-center justify-between px-1 py-2 mt-10">
      <button
        className="flex items-center justify-center uppercase md:text-lg text-base font-bold group text-color-secondary  cursor-pointer rounded mx-1 "
        disabled={page === 1}
        onClick={prevPage}
      >
        <CaretCircleLeft
          size={30}
          className="font-bold text-color-secondary group-hover:text-color-accent-100  cursor-pointer transition-all "
        />
        <span className="mt-1 ms-1 group-hover:text-color-accent-100 transition-all ">
          Prev
        </span>
      </button>

      <p className="mx-2 text-base md:text-lg font-semibold text-color-secondary">
        Page {page} of {lastPage}
      </p>
      <button
        className="flex items-center justify-center uppercase text-base md:text-lg font-bold group text-color-secondary  cursor-pointer rounded mx-1 "
        disabled={page >= lastPage}
        onClick={nextPage}
      >
        <span className="mt-1 me-1 group-hover:text-color-accent-100 transition-all ">
          Next
        </span>
        <CaretCircleRight
          size={30}
          className="font-bold text-color-secondary group-hover:text-color-accent-100  cursor-pointer transition-all "
        />
      </button>
    </div>
  );
}
