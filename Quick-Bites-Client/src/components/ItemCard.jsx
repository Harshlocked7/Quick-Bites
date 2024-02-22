import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const ItemCard = () => {
  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
       
        <img src="https://w7.pngwing.com/pngs/133/54/png-transparent-pancakes-served-on-plate-banana-pancakes-scrambled-eggs-breakfast-ihop-pancake-food-recipe-eating-thumbnail.png" alt="" className='w-[55px] h-[55px]'/>
        <div className='leading-5'>
        <MdDelete className='absolute right-7 text-gray-600 cursor-pointer'/>
            <h2 className='font-bold text-gray-800'>Onion Pizza</h2>
            <div className='flex justify-between'>
                <span className='text-green-500 font-bold'>₹180</span>
                <div className='flex justify-center item-center gap-2 absolute-right-7 mx-3'>
            <AiOutlinePlus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 
            text-xl transition-all ease-linear cursor-pointer'/>
            <span >1</span>
            <AiOutlineMinus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 
            text-xl transition-all ease-linear cursor-pointer'/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCard