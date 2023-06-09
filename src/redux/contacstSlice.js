import { nanoid } from "nanoid"
import {  createSlice } from "@reduxjs/toolkit"



const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];


const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers:{
        addContact:{
            reducer(state, action){
                return [...state, action.payload];
            },
            prepare(contacts){
                return{
                    payload:{
                        id: nanoid,
                        ...contacts
                        
                    }
                }
            }
        },
        removeContact(state, action){
           return state.filter(contact => contact.id !== action.payload)
        }
    }
})

export const {addContact, removeContact} = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer;










// import { configureStore } from "@reduxjs/toolkit"
// import storage from 'redux-persist/lib/storage'

// import { contactsReducer } from "./contacts/contactsSlice"


 
 


//  export const store =configureStore({
//     reducer: persistedReducer, 
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//  })
 
//  export const persistor =persistStore(store)

