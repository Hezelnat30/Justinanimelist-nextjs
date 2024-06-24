"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-color-accent-100 animate-bounce">
          404
        </h1>
        <p className="text-2xl text-color-secondary">Halaman Tidak Ditemukan</p>
        <p className="mt-2 text-color-secondary">
          Maaf, halaman yang Anda cari tidak ada.
        </p>
        <div className="mt-6">
          <button
            onClick={() => router.back()}
            className="inline-flex justify-center gap-2 items-center px-4 py-2 text-white bg-color-primary rounded-lg hover:bg-[#8a63d7]  transition-all"
          >
            <FaArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
