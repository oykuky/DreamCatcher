// import Image from 'next/image'
import React from 'react'
import SparklesText from "@/components/ui/sparkles-text";

const Header = () =>{
  return (
    <div className="bg-gray-950 h-36 rounded-xl m-3 border-[4px] border-purple-800 md:mx-10">
        <div className='flex flex-col text-center font-bold mt-4 gap-5'>
               <div className='flex justify-center items-center'>
                  {/* <Image src="/dream-catcher.png" alt='dream-catcher' width={50} height={50} className='rounded-full bg-purple-500 p-1 mr-3'/> */}
                  <SparklesText text="Dream Catcher" />
               </div>
                <div className='flex gap-5 justify-evenly'>
                    <h2 className='hover:text-pink-600'>Keşfet</h2>
                    <h2 className='hover:text-pink-600'>Rüya Yorumlat</h2>
                    <a href='/login'><h2 className='hover:text-pink-600'>Login</h2></a>
                </div>
        </div>
    </div>
  )
}

export default Header