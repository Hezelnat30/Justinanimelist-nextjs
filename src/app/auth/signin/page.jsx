"use client";
import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
export default function Page() {
  const [providers, setProviders] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    async function dataProviders() {
      const response = await getProviders();
      setProviders(response);
      console.log(response);
    }
    dataProviders();
  }, []);

  function handleButtonPassword() {
    setShowPassword((prev) => !prev);
  }
  console.log(providers);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-36 px-2 sm:pt-0">
      <div className="bg-color-light w-full sm:w-1/3 px-8 py-10 rounded-lg shadow-lg text-center shadow-color-primary">
        <div className="flex flex-col items-start justify-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold uppercase">Welcome,</h1>
          <p className="text-slate-800 font-light text-base sm:text-lg">
            Please sign in first to continue
          </p>
        </div>
        <div className="grid grid-cols-1 gap-1 place-items-start mb-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="w-full py-[0.3rem] px-4 focus:outline-none focus:ring-2  rounded-md focus:ring-color-accent-100 focus:border-color-accent-100 shadow shadow-color-dark"
            placeholder="justin@example.com"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 place-items-start mb-2">
          <div className="flex flex-col">
            <label htmlFor="firstname" className="text-start">
              First Name
            </label>
            <input
              id="firstname"
              type="text"
              className="w-full py-[0.35rem] px-4 focus:outline-none focus:ring-2  rounded-md focus:ring-color-accent-100 focus:border-color-accent-100 shadow shadow-color-dark"
              placeholder="Justin"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname" className="text-start">
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              className="w-full py-[0.35rem] px-4 focus:outline-none focus:ring-2  rounded-md focus:ring-color-accent-100 focus:border-color-accent-100 shadow shadow-color-dark"
              placeholder="Hezekiel"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 place-items-start mb-4">
          <label htmlFor="password">Password</label>
          <div className="w-full relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className=" relative w-full py-[0.35rem] px-4 focus:outline-none focus:ring-2  rounded-md focus:ring-color-accent-100 focus:border-color-accent-100 shadow shadow-color-dark"
            />
            <button
              className="absolute end-2 top-1/2 -translate-y-1/2"
              onClick={handleButtonPassword}
            >
              {showPassword ? <FaEye size={24} /> : <FaEyeSlash size={24} />}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <button className="w-full bg-color-accent-100 text-white px-4 py-2 rounded-lg shadow-md hover:bg-color-accent-200 transition-all duration-300 ease-in-out">
            Sign In
          </button>
        </div>
        <div className="flex items-center my-4 justify-center ">
          <div className="w-full border-t border-gray-300"></div>
          <p className="px-3 text-gray-400">or</p>
          <div className="w-full border-t border-gray-300"></div>
        </div>
        {providers ? (
          <div className="grid grid-cols-1 gap-2 place-items-center">
            {providers.google && (
              <button
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-400 transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
                onClick={() =>
                  signIn(providers.google.id, { callbackUrl: "/" })
                }
              >
                <FaGoogle className="text-xl" />
                Sign In with {providers.google.name}
              </button>
            )}
            {providers.github && (
              <button
                className="w-full bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
                onClick={() =>
                  signIn(providers.github.id, { callbackUrl: "/" })
                }
              >
                <FaGithub className="text-xl" />
                Sign In with {providers.github.name}
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
