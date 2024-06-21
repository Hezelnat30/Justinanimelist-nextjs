"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

export default function InputSearch() {
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
    console.log(keyword);
  }

  return (
    <div className="flex w-full sm:w-auto items-center justify-center relative">
      <input
        type="text"
        placeholder="Cari anime"
        className="rounded w-full py-2 px-4"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className="absolute top-1/2 -translate-y-1/2 end-1"
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
