import { nanoid } from "nanoid"
// import { ADD_CONTACT, REMOVE_CONTACT } from "../contacts/contactsTypes"
import { createAction } from "@reduxjs/toolkit"


export const addContact = createAction('contacts/add', data => {
    return{
        payload: {
            ...data,
            id: nanoid()
        }
    }
}) 
export const removeContact= createAction('contacts/remove', data =>{
    return{
        payload:{
            id: data
        }
    }
}) 




// export const  addContacts = payload =>{
//     return{
//         type: ADD_CONTACT,
//         payload:{
//             id: nanoid(),
//             ...payload,
//         }
//     }
// }

// export const removeContacts = contactId =>{
//     return{
//         type: REMOVE_CONTACT,
//         payload:{
//             id: contactId,

//         }
//     }
// }