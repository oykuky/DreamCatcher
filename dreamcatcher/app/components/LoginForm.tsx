"use client";

import BlurIn from "@/components/ui/blur-in";
import React from "react";

function LoginForm() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <form className="flex flex-col gap-8">
        <BlurIn
          word="Login"
          className="text-3xl font-bold text-white dark:text-pink-700"
        />
        <input
          type="text"
          name="username"
          //   placeholder={t("login.username")}
          className="rounded-lg h-12 px-9 bg-gray-800 text-gray-200 border border-gray-700 focus:border-yellow-400 focus:outline-none"
        />
        <input
          type="password"
          name="password"
          //   placeholder={t("login.password")}
          className="rounded-lg h-12 px-9 bg-gray-800 text-gray-200 border border-gray-700 focus:border-yellow-400 focus:outline-none"
        />
        <button
          type="submit"
          className="text-white rounded-lg text-md font-semibold px-5 py-3 mt-12 text-center bg-gray-950 border-pink-500 border-t-2 shadow-md shadow-pink-500 hover:scale-105 duration-300 transition ease-in-out"
        >
          {/* {t("login.loginButton")} */} login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
