import React from 'react'
import { FaStar } from "react-icons/fa";


const FoodCard = () => {
  return (
    <div className="font-bold w-[250px]  rounded-lg p-3 flex flex-col hover:scale-110 cursor-grab transiton-all duration-500 ease-in-out gap-2">
      <img src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328
      ~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8b
      b6b875a78a1eda09cb5" alt="" 
      className="w-auto h-[140px] "/>
      <div className=' bg-yellow-300 p-2 '>
        <div className='text-sm flex justify-between'>
        <h2>Onion Pizza</h2>
        <span className='text-green-600'>₹ 180</span>
        </div>
         <p className='text-sm font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quos!</p>
         <div className='flex justify-between'>
         <span className='flex justify-center item-center p-1'><FaStar className='mr-1 mt-1'/> 4.5 </span>
         <button className='p-1 text-white bg-green-500 hover:bg-green-500 rounded-lg text-sm'>Add to cart</button>
         </div>
      </div>
    </div>
  )
}

export default FoodCard;  