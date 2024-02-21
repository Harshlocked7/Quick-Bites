import React from 'react'
import FoodCard from './FoodCard';
// import FoodData from './data/FoodData.js';
// import FoodData from '../data/FoodData'
// import FoodData from '../data/foodData.js';
import food1 from '../food.js'

const FoodItems = () => {
  return (
    <>
        {food1.map((food) => { 
            return (
            <FoodCard 
            key={food.id} id={food.id} name={food.name} price={food.price} 
            desc={food.desc}
            rating={food.rating}
            img={food.img}/>
        );
        })}
        
    </>
  );
}

export default FoodItems;