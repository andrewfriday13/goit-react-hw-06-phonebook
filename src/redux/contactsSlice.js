import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'


const objContacts=[
    {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
    {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
    {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
    {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'}
  ]

  const contactsSlice = createSlice({
    name: 'contacts',
    initialState: objContacts,
    reducers: {
        addContact:{
            reducer(state, action){
                state.push(action.payload)
            }, 
            prepare(name, number){
                return {
                    payload: {
                      number,
                      name,
                      id: nanoid(),
                    }
            }}
        },
        removeContact:{},
        filter:{},
    }
  })

  export const contactsReducer = contactsSlice.reducer;
  export const {addContact, removeContact, filter} = contactsSlice.actions