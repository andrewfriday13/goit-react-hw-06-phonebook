import {  createReducer } from "@reduxjs/toolkit";
import { filterContact } from "./filterActions";


const initialState =''

export const filterReducer = createReducer(initialState,{
    [filterContact]: (_, {payload}) => payload
})

