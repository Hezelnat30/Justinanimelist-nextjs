import React from "react";
import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <FaSpinner size={76} className="animate-spin text-color-accent" />
    </div>
  );
}
