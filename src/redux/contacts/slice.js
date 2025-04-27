import { createSlice} from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../contacts/operations';
import {logOut} from '../auth/operations';


const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        }).addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
        }).addCase(fetchContacts.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        }).addCase(addContact.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        }).addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items.push(action.payload);
        }).addCase(addContact.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        }).addCase(deleteContact.fulfilled, (state,action) => {
            state.isLoading = false;
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        }).addCase(logOut.fulfilled, (state) => {
            state.items = [];
});
    },
});


export default slice.reducer;