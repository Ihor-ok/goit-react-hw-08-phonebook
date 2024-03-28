import { configureStore } from '@reduxjs/toolkit'


import { contactsSlice } from 'components/redux/contactsSlice'
import { filterSlice } from 'components/redux/filterSlice'
import { authReducer } from './auth/slice'





export const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
  },

   
})



