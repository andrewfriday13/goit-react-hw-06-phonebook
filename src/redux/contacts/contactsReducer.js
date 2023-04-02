import { nanoid } from "nanoid"
import { createReducer } from "@reduxjs/toolkit"
import { addContact, removeContact } from "./contactsAction"


const initialState =[
    {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
    {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
    {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
    {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'}
  ]

  export const contactsReducer = createReducer(initialState, {
    [addContact]: (state, {payload})=> [...state, payload],
    [removeContact]: (state, {payload}) => state.filter((contact) => contact.id !== payload.id)
 })


// export default contactsReducer


