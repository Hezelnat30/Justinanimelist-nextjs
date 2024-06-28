"use client";
import { ArrowFatLineLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function Header({ title }) {
  const router = useRouter();
  function handleBack(e) {
    e.preventDefault();
    router.back();
  }

  return (
    <div className="flex justify-between items-center mb-2">
      <button
        className="text-color-accent-200 hover:text-color-accent-100"
        onClick={handleBack}
      >
        <ArrowFatLineLeft size={34} />
      </button>
      <h3 className="text-3xl text-color-accent-200 font-bold uppercase">
        {title}
      </h3>
    </div>
  );
}
