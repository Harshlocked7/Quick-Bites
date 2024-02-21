import React from 'react'
import FoodCard from './FoodCard';
// import FoodData from './data/FoodData.js';
import FoodData from '../data/FoodData'

const FoodItems = () => {
  return (
    <div>
        {FoodData.map((food) => { 
            return <FoodCard key={food.id}/>})}
    </div>
  )
}

export default FoodItems;