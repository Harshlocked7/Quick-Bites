import React from 'react'

const CategoryMenu = () => {
  return (
    <div className='mx-6 '>
       <h3 className='text-xl font-semibold '> Find the best Food </h3>
       <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth '>
       <button className='bg-yellow-300 px-3 py-2 bg-gray-200 font-bold hover rounded-lg hover:bg-green-500 hover:text-white'>
        All
       </button>
       <button className='bg-yellow-300 px-3 py-2 bg-gray-200 font-bold hover rounded-lg hover:bg-green-500 hover:text-white'>
        BreakFast
       </button>
       <button className='bg-yellow-300 px-3 py-2  font-bold hover rounded-lg hover:bg-green-500 hover:text-white'>
        Lunch
       </button>
       <button className='bg-yellow-300 px-3 py-2 bg-gray-200 font-bold hover rounded-lg hover:bg-green-500 hover:text-white'>
        Dinner
       </button>
       <button className='bg-yellow-300 px-3 py-2 bg-gray-200 font-bold hover rounded-lg hover:bg-green-500 hover:text-white'>
        Snacks
       </button>
       </div>
    </div>
  )
}

export default CategoryMenu