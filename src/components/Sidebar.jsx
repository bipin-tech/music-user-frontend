import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full p-4 flex-col gap-4 text-white hidden lg:flex'>
    <div className='bg-gradient-to-r h-[15%] rounded-lg flex flex-col justify-around shadow-lg'>
        <div
            onClick={() => navigate('/')}
            className='flex items-center gap-3 pl-8 cursor-pointer hover:bg-blue-700 transition-colors duration-200 p-2 rounded-lg'
        >
            <img className='w-6' src={assets.home_icon} alt="Home Icon" />
            <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 text-white pl-8 hover:bg-blue-700 transition-colors duration-200 p-2 rounded-lg cursor-pointer'>
            <img className='w-6' src={assets.search_icon} alt="Search Icon" />
            <p className='font-bold'>Search</p>
        </div>
    </div>
</div>
);
}

export default Sidebar
