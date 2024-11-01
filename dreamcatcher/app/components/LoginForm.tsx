'use client'
import React from 'react'

function LoginForm() {
  return (
    <div className="w-full max-w-md">
      <form className='flex flex-col gap-8'>
        <input 
          type="text" 
          name="username" 
        //   placeholder={t("login.username")}
          className='rounded-lg h-12 px-4 bg-gray-800 text-gray-200 border border-gray-700 focus:border-yellow-400 focus:outline-none'
        />
        <input 
          type="password" 
          name="password" 
        //   placeholder={t("login.password")} 
          className='rounded-lg h-12 px-4 bg-gray-800 text-gray-200 border border-gray-700 focus:border-yellow-400 focus:outline-none'
        />
        <button 
          type="submit" 
          className="text-white rounded-lg text-md font-semibold px-5 py-3 mt-12 text-center bg-gray-950 border-pink-500 border-t-2 shadow-md shadow-pink-500 hover:scale-105 duration-300 transition ease-in-out"
        >
          {/* {t("login.loginButton")} */} login
        </button>
      </form>
    </div>
  )
}

export default LoginForm