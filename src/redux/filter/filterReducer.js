import {  createReducer } from "@reduxjs/toolkit";
// import { FILTER_CONTACT } from "./filterTypes";
import { filterContact } from "./filterActions";


const initialState =''

export const filterReducer = createReducer(initialState,{
    [filterContact]: (_, {payload}) => payload
})

//  const filterReducers = (state = initialState , {payload, type}) =>{
//     switch(type){
        
//     case FILTER_CONTACT:
//         return  payload
    
//         default: 
//         return state
//     }
 
// }

// export default filterReducer