import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux'; 
import { MdShoppingCart } from "react-icons/md";



const Cart = () => {
  const [activeCart, setActiveCart] = useState(true);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);
  return (
    <>
    <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
        <div className='flex justify-between items-center my-3'>
            <span className='text-xl font-bold text-gray-950'>My Orders</span>
            <MdClose onClick={() => setActiveCart(!activeCart)} className='border-2 bg-green-500 border-white  text-white-300 font-bold p-1  text-xl rounded-md hover:text-red-700 cursor-pointer'/>
        </div>

        {cartItems.length >  0 ? cartItems.map((food) => {
          return (
          <ItemCard 
          key={food.id} 
          id={food.id} 
          name={food.name} 
          price={food.price}
          img={food.img}
          qty={food.qty}/>);
        }) : <h2 className='text-green-600 text-center text-xl font-bold'>Cart is Empty :( </h2>}
        
       
        <div className='absolute bottom-0 mb-5'>
        <h3 className='font-semibold text-gray-800'>Items : {totalQty}</h3>
        <h3 className='font-semibold text-gray-800'>Total Amount : {totalPrice} </h3>
        <hr className='w-[90vw] lg:18vw my-2'/>
        <button className='bg-green-500 font-bold p-3 text-white py-2 rounded-lg w-[90] lg:w-[18vw]'>Checkout</button>
    </div>
    
    </div>
   
    <MdShoppingCart onClick={() => setActiveCart(!activeCart)} className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-5 right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}/>

    </>
  )
}

export default Cart