import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts} from 'fetch/fetchContacts';




export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {contacts: {
    items: [],
    isLoading: false,
    error: null
  }},  // initializes state 

  reducers: {
    resetState(state) {
      state.contacts.items = [];
      state.contacts.isLoading = false;
      state.contacts.error = null;
    }
   
  },

   extraReducers: (builder) => {
   builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.contacts.items.push(...action.payload);
       
        state.contacts.items.splice(0, state.contacts.items.length, ...action.payload);
        
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
     .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.items.unshift(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
  
  },
})


export const { removeContact } = contactsSlice.actions

