import { nanoid } from "nanoid"
import {  createSlice } from "@reduxjs/toolkit"
import {  persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage'





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

