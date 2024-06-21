import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";

export default function Navbar() {
  return (
    <header className="bg-color-primary rounded-b-xl">
      <div className="container flex sm:flex-row flex-col justify-between items-center gap-2 p-4 sm:py-3 sm:px-0">
        <Link
          href="/"
          className="font-bold self-center text-white text-2xl uppercase"
        >
          Justin Anime List
        </Link>
        <InputSearch />
      </div>
    </header>
  );
}
