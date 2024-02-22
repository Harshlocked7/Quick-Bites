import React from 'react'
import { MdClose } from "react-icons/md";
import ItemCard from './ItemCard';
const Cart = () => {
  return (
    <>
    <div className='fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5'>
        <div className='flex justify-between items-center my-3'>
            <span className='text-xl font-bold text-gray-950'>My Orders</span>
            <MdClose className='border-2 bg-green-500 border-white  text-white-300 font-bold p-1  text-xl rounded-md hover:text-red-700 cursor-pointer'/>
        </div>
        <ItemCard/> 
        <ItemCard/> 
        <ItemCard/> 
        <div className='absolute bottom-0 mb-5'>
        <h3 className='font-semibold text-gray-800'>Items : </h3>
        <h3 className='font-semibold text-gray-800'>Total Amount : </h3>
        <hr className='w-[90vw] lg:18vw my-2'/>
        <button className='bg-green-500 font-bold p-3 text-white py-2 rounded-lg w-[90] lg:w-[18vw]'>Checkout</button>
    </div>
    </div>
  

    </>
  )
}

export default Cart