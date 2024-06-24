"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function InputSearch({ setFocus }) {
  const [error, setError] = useState("");
  const searchRef = useRef();
  const router = useRouter();

  function handleSearch(e) {
    const keyword = searchRef.current.value.trim();
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      keyword.length >= 3
        ? (setError(""), router.push(`/search/${keyword}`))
        : (setError("Required at least 3 characters"),
          setTimeout(() => setError(""), 2000));
    }
  }

  return (
    <div className="flex w-full sm:w-1/4 items-center justify-center relative">
      <input
        type="text"
        className="rounded-full w-full py-[0.4rem] px-4 focus:outline-none focus:ring-2 focus:ring-color-accent-100 focus:border-color-accent-100 shadow-lg"
        ref={searchRef}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onKeyDown={handleSearch}
        placeholder="Search"
      />
      <button
        className="absolute top-1/2 -translate-y-1/2 end-2"
        onClick={handleSearch}
      >
        <MagnifyingGlass size={30} />
      </button>
      {error && (
        <p className="absolute -bottom-10 left-0 text-red-500 text-md">
          {error}
        </p>
      )}
    </div>
  );
}
