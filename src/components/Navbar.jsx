import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-gray-900 text-white shadow-md'>
            <div className="container mx-auto flex justify-between items-center px-6 py-4">

                <div className="logo font-bold text-3xl">
                    <span className='text-green-500'>&lt;</span>
                    <span>Password</span><span className='text-green-500'> Manager/&gt;</span>
                </div>

                <div className="flex items-center gap-4">
                    <ul className="hidden md:flex space-x-6">
                        <li><a className='hover:text-green-500' href='/'>Home</a></li>
                        <li><a className='hover:text-green-500' href='#'>About</a></li>
                        <li><a className='hover:text-green-500' href='#'>Contact</a></li>
                    </ul>
                    <button className='flex items-center bg-green-950 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300'>
                        <img className='invert w-6 mr-2' src="/icons/github.svg" alt="github logo" />
                        
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
