"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

export default function Navbar() {
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      setFixedNavbar(window.scrollY > fixedNav);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarWeb = `bg-color-primary z-50 rounded-b-xl shadow-lg absolute top-0 left-0 right-0 flex ${
    fixedNavbar ? `${focus ? "" : "md:bg-opacity-60"} navbar-fixed` : ""
  }`;
  return (
    <header className={navbarWeb}>
      <div className="container flex sm:flex-row flex-col justify-between items-center gap-2 p-4 sm:py-3 sm:px-0">
        <Link
          href="/"
          className="w-1/4 font-bold self-center text-white text-2xl uppercase"
        >
          Justin Anime List
        </Link>
        <InputSearch setFocus={setFocus} />
        <UserActionButton />
      </div>
    </header>
  );
}
