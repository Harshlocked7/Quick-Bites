import React from 'react'


const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between  py-3  mb-10 bg-yellow-300">
        <div className='mx-3'>
        <h1 className='text-3xl font-bold text-gray-900'>
  <span className='text-3xl'>Q</span>uick<span className='text-3xl'>B</span>ites Foods</h1>
            <h3 className='text-2xl font-bold text-gray-700' >
                {new Date().toUTCString().slice(0, 16)}
            </h3>
           
        </div>
        <div className='mx-3'>
            <input type="search" name='search' id='' placeholder='Search' autoComplete='off' className='p-3 border border-gray-600 text-sm rounded-lg outline-none w-full lg:w-[25vw]'/>
        </div>
    </nav>
  )
}

export default Navbar