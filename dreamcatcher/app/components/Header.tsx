import Image from 'next/image'
import React from 'react'

const Header = () =>{
  return (
    <div className="bg-gray-900 h-36 rounded-md m-3 border-[4px] border-purple-800">
        <div className='flex flex-col text-center font-bold mt-4 gap-5'>
               <div className='flex justify-center items-center'>
                  <Image src="/dream-catcher.png" alt='dream-catcher' width={50} height={50} className='rounded-full bg-purple-500 p-1 mr-3'/>
                  <h1 className='text-3xl'>Dream Catcher</h1> 
               </div>
                <div className='flex gap-5 justify-evenly'>
                    <h2>Keşfet</h2>
                    <h2>Rüya Yorumlat</h2>
                    <h2>Login</h2>
                </div>
        </div>
    </div>
  )
}

export default Header