import React, { useEffect, useState } from 'react'
import food from '../food.js'

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const listUniqueCategory = () => {
    const uniqueCategories = [
      ...new Set(food.map((food) => food.category))];
      setCategories(uniqueCategories)
  }
  useEffect(() => {
    listUniqueCategory();
  }, [])
  return (
    <div className='mx-6 '>
       <h3 className='text-xl font-semibold '> Find the best Food </h3>
       <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth '>
       
       {
        categories.map((category, index) => {
          return (
            <button key={index} className='bg-yellow-300 px-3 py-2 bg-gray-200 font-bold hover rounded-lg hover:bg-green-500 hover:text-white'>
              {category}
       </button>
          );
        })
       }
       </div>
    </div>
  )
}

export default CategoryMenu