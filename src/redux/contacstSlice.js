import { nanoid } from "nanoid"
import {  createSlice } from "@reduxjs/toolkit"
import {  persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage'




const initialState =[
    {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
    {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
    {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
    {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'}
  ]

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {contacts:[]},
    reducers:{
        addContact:{
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(contact){
                return{
                    payload:{
                        contact,
                        id: nanoid()
                    }
                }
            }
        },
        removeContact(state, action){
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload)
        }
    }
})
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  export const contactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
  );

export const {addContact, removeContact} = contactsSlice.actions









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

