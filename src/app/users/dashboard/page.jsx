"use client";
import Loading from "@/app/loading";
import { authClientSession } from "@/libs/authClient-libs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await authClientSession();
        setUser(userData);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const { name, image } = user || {};

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container min-h-screen flex pt-24">
          <div className="w-2/5 py-10 mx-auto text-center flex flex-col gap-2 justify-between">
            <div className="flex-col px-9 items-center">
              <h1 className="text-7xl text-center text-white uppercase font-extrabold">
                Welcome
              </h1>
              <h3 className="text-white font-extrabold uppercase text-7xl">
                {name}
              </h3>
            </div>
            <Image
              src={image}
              width={300}
              height={300}
              className="rounded-full mx-auto shadow shadow-color-accent-100 transition-transform transform hover:scale-105 border-4 border-color-accent-200"
              alt="profile"
            />
            <div className="flex gap-6 justify-center items-center py-8">
              <Link
                href="/users/dashboard/collection"
                className="bg-color-accent-100 rounded-md px-10 font-semibold uppercase text-lg py-3"
              >
                My Collection
              </Link>
              <Link
                href="/users/dashboard/comment"
                className="bg-color-accent-100 rounded-md px-10 font-semibold uppercase text-lg py-3"
              >
                My Comment
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
