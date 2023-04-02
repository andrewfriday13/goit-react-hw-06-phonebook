import { createAction } from "@reduxjs/toolkit"
import { FILTER_CONTACT } from "./filterTypes"

export const searchContacts = name =>{
    return{
        type: FILTER_CONTACT,
        payload: name,
    }
}

export const filterContact = createAction('filter/get', data =>{
    return{
        payload:{
            payload: data
        }
    }
})