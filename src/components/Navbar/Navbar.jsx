import React from 'react'
import logo from '../../assets/logo.png'
import dollar from '../../assets/dollar 1.png'
const Navbar = ({availableBalance}) => {
    return (
        <div className="navbar max-w-7xl mx-auto px-10">
            <div className="flex-1">
                <a className="text-xl">
                    <img src={logo} alt="" className='w-[60px] h-[60px]' />
                </a>
            </div>
            <div className="flex items-center border border-gray-300 p-3 rounded-xl font-bold">
                <span className='mr-1'>{availableBalance}</span>
                <span className='mr-1'> Coin</span>
                <img src={dollar} alt="" />
            </div>
        </div>
    )
}

export default Navbar
