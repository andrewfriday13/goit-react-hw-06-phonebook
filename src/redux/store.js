import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistStore } from "redux-persist"
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";

import { contactsReducer } from "./contacstSlice"
import { filterReducer } from "./filterSlice";



const persistConfig = {
  key: 'contacts',
  storage,
}

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,

})
const persistedReducer = persistReducer(persistConfig, rootReducer)

 export const store =configureStore({
    reducer: persistedReducer
 },
 )
 export const persistor =persistStore(store)
