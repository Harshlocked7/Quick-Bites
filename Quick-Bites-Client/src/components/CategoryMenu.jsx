import React, { useEffect, useState } from 'react'
import food from '../food.js'
import { useDispatch, useSelector } from "react-redux"
import { setCategory } from '../redux/slices/CategorySlice.jsx'

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

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category)

  return (
    <div className='mx-6 '>
       <h3 className='text-xl font-semibold '> Find the best Food </h3>
       <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth'>
       <button onClick={() => dispatch(setCategory("All"))}  className={`px-3 py-2 bg-yellow-300 font-bold hover:bg-green-500 rounded-lg  hover:text-white 
       ${selectedCategory === "All" && "bg-green-600 text-white"}`}>
              All
       </button>
       {
        categories.map((category, index) => {
          return (
            <button onClick={() => dispatch(setCategory(category))} key={index} 
            className={` px-3 py-2 bg-yellow-300 font-bold hover rounded-lg hover:bg-green-500 hover:text-white 
            ${selectedCategory === category && "bg-green-600 text-white"}`}>
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