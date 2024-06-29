"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CommentInput({
  anime_mal_id,
  user_email,
  username,
  anime_title,
}) {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  function handleComment(e) {
    setComment(e.target.value);
  }

  async function handlePost(e) {
    e.preventDefault();

    if (comment.trim().length === 0 || comment.length < 3) {
      setErrorMessage("Required at least 3 character");
      setTimeout(() => setErrorMessage(""), 2000);
      return;
    }

    const data = { anime_mal_id, user_email, comment, username, anime_title };
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
        setComment("");
        setTimeout(() => {
          setIsCreated(false);
          router.refresh(); // Pemanggilan refresh halaman ditempatkan di sini
        }, 1500);
      }
    } catch (error) {
      console.error("Error in handlePost:", error);
    }
  }

  function handleCancel() {
    setComment("");
    setErrorMessage("");
  }

  return (
    <div className="w-full gap-2 h-28 mt-6 flex flex-col justify-center items-center  py-2 px-6 transition-all relative">
      <div className="px-5 md:ps-20 md:pe-9 w-full absolute top-0">
        {isCreated && (
          <p className="text-2xl font-bold text-center uppercase text-color-accent-200">
            Comment Added
          </p>
        )}
        {errorMessage && (
          <p className="absolute -top-4 text-base text-red-500">
            {errorMessage}
          </p>
        )}
        <textarea
          onChange={handleComment}
          value={comment}
          name="comment"
          id="comment"
          className="px-4 h-10 w-full text-xl md:text-2xl rounded border-b-2  outline-none border-color-accent-100 bg-transparent text-color-secondary"
          placeholder="Add a comment"
        />
      </div>
      {comment.length > 0 && (
        <div className="flex w-full px-5  gap-3 mt-1 justify-start absolute bottom-4 md:ps-20 md:pe-9">
          <button
            className="w-1/2 md:w-1/5  py-2 bg-color-accent-200 hover:bg-color-accent-100 text-color-dark rounded-full uppercase font-semibold"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="w-1/2 md:w-1/4  py-2 bg-color-accent-200 hover:bg-color-accent-100 text-color-dark rounded-full uppercase font-semibold"
            onClick={handlePost}
          >
            Post Comment
          </button>
        </div>
      )}
    </div>
  );
}
