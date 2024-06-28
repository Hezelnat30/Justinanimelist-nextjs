"use client";

import { useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

export default function WatchlistButton({ anime_mal_id, user_email, anime_image , anime_title }) {
  const [isCreated, setIsCreated] = useState(false);

  async function handleWatchlist(e) {
    e.preventDefault();

    const data = { anime_mal_id, user_email, anime_image , anime_title };
    try {
      const res = await fetch("/api/v1/collection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const collection = await res.json();
      if (collection.status === 200) {
        setIsCreated(true);
      }
    } catch (error) {
      console.error("Error in handleWatchlist:", error);
    }
  }
  return (
    <>
      <button
        className={`absolute bottom-2 rounded-md right-2 bg-red-500 text-white px-4 py-2 flex items-center ${
          isCreated ? "cursor-not-allowed" : ""
        }`}
        onClick={handleWatchlist}
        disabled={isCreated}
      >
        {isCreated ? (
          <>
            Added to Watchlist
            <IoHeartSharp className="text-xl ms-1" />
          </>
        ) : (
          <>
            Add to Watchlist
            <IoHeartOutline className="text-xl ms-1" />
          </>
        )}
      </button>
    </>
  );
}
