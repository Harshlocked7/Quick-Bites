import { createSlice } from '@reduxjs/toolkit'

const CategorySlice = createSlice ({
    name : "category",
    initialState : {
        category: "ALL",
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        }
    },
}) 

//Hello
//Hello
//Hello
//Hello
//Hello
//Hello
//Hello