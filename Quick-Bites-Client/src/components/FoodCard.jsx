import React from 'react'
import { FaStar } from "react-icons/fa";


const FoodCard = ({id, name, price, desc, img, rat}) => {
  return (
    <div className="font-bold w-[250px] p-3 flex flex-col hover:scale-110 cursor-grab transiton-all duration-500 ease-in-out gap-1 rounded-lg">
      <img src={img} alt="" 
      className="w-auto h-[140px] "/>
      <div className=' bg-yellow-300 p-2 rounded-lg'>
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