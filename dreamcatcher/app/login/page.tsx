import ShineBorder from '@/components/ui/shine-border'
import React from 'react'
import LoginForm from '../components/LoginForm'

function login() {
  return (
    <div className='flex justify-center items-center mt-10'>
    <ShineBorder
      className="flex h-[500px] items-center justify-center rounded-lg border bg-gray-950 md:shadow-xl"
      color={["#5c2ed1", "#c40446", "#710e87"]}
    >
      <LoginForm/>
    </ShineBorder>
    </div>
  )
}

export default login