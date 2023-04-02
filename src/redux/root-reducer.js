import { combineReducers } from "@reduxjs/toolkit";
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { contactsReducer } from "./contacts/contactsReducer";
import { filterReducer } from "./filter/filterReducer";





const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})


const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer);




export default persistedReducer