import React from 'react'
import { LiveClock } from './LiveClock'

const Header = () => {
  return (
    <div className='flex justify-between px-4 pt-4'>
        <div className='lg:text-6xl text-5xl md:p-5 lg:p-6 p-6'>Welcome Back, Tobi</div>
        <h2><LiveClock /></h2>
    </div>
  )
}

export default Header