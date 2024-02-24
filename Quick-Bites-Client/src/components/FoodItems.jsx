import React from 'react'
import FoodCard from './FoodCard';
import food1 from '../food.js'
import toast, {Toaster} from 'react-hot-toast'

const FoodItems = () => {
  const handleToast = (name) => toast.success(`Added ${name}`)
  return (
    <>
    <Toaster position='top-center' reverseOrder={false}/>
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
        {food1.map((food) => { 
            return (
            <FoodCard 
            key={food.id} id={food.id}
            name={food.name} 
            price={food.price} 
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}/>
        );
        })}       
    </div>
    </>
  );
}

export default FoodItems;