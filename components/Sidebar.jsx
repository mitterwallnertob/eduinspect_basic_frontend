import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { RxBackpack, RxDashboard, RxPerson } from 'react-icons/rx'
import { HiOutlineChartPie } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'


const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen p-4 bg-gray-900 border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link href='/'>
                    <div className='bg-orange-800 text-white p-3 rounded-lg inline-block '>
                        <RxBackpack />
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                <Link href='/'>
                    <div className='bg-gray-500 hover:bg-gray-400 cursor-pointer my-4 mb-4 p-3 rounded-lg inline-block'>
                        <RxDashboard />
                    </div>
                </Link>
                <Link href='/analytics'>
                    <div className='bg-gray-500 hover:bg-gray-400 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <HiOutlineChartPie />
                    </div>
                </Link>
                <Link href='/teachers'>
                    <div className='bg-gray-500 hover:bg-gray-400 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <RxPerson />
                    </div>
                </Link>
                <Link href='/settings'>
                    <div className='bg-gray-500 hover:bg-gray-400 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <FiSettings />
                    </div>
                </Link>
            </div>
        </div>
        
        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

/*
    return (
        <div className='flex'>
            <div className='fixed w-20 h-screen p-4 bg-gray-900 border-r-[1px] flex flex-col justify-between'>
                <div className='flex flex-col items-center'>
                    <div className='hidden lg:flex flex-col items-center'>
                        <Link href='/'>
                            <div className='bg-orange-800 text-white p-3 rounded-lg inline-block'>
                                <RxBackpack />
                            </div>
                        </Link>
                        <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                    </div>
                    <Link href='/'>
                        <div className='bg-gray-500 hover:bg-gray-400 cursor-pointer mt-[20vh] mb-4 p-3 rounded-lg inline-block'>
                            <RxDashboard />
                        </div>
                    </Link>
                    <Link href='/customers'>
                        <div className='bg-gray-500 hover:bg-gray-400 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                            <RxPerson />
                        </div>
                    </Link>
                    <Link href='/orders'>
                        <div className='bg-gray-500 hover:bg-gray-400 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                            <HiOutlineChartPie />
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className='bg-gray-500 hover:bg-gray-400 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                            <FiSettings />
                        </div>
                    </Link>
                </div>
            </div>
            
            <main className='ml-20 w-full'>{children}</main>
        </div>
    )
}
*/

export default Sidebar