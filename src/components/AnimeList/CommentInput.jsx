"use client";

import { useState } from "react";

export default function CommentInput({ anime_mal_id, user_email, username }) {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  function handleComment(e) {
    setComment(e.target.value);
  }

  async function handlePost(e) {
    e.preventDefault();
    const data = { anime_mal_id, user_email, comment, username };
    try {
      const res = await fetch("/api/v1/comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to post comment");
      }

      const postComment = await res.json();
      if (postComment.status === 200) {
        setIsCreated(true);
      }
    } catch (error) {
      console.error("Error in handlePost:", error);
    }
  }

  return (
    <div className="w-full gap-2 mt-4 flex flex-col justify-center items-center md:ps-20 md:pe-9 py-2 px-6">
      {isCreated && (
        <p className="text-2xl font-bold text-color-accent-200">
          Comment Added
        </p>
      )}
      <textarea
        onChange={handleComment}
        name="comment"
        id="comment"
        className="h-24 md:h-32 px-4 py-2 w-full text-xl md:text-2xl rounded"
      />
      <button
        className="w-1/2 md:w-1/4 px-4 py-2 bg-color-accent-200 hover:bg-color-accent-100 text-color-dark rounded"
        onClick={handlePost}
      >
        Post Comment
      </button>
    </div>
  );
}
