import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'filters',
    initialState: {
        query: '',
    },
    reducers: {
        changeFilter: (state, action) => {
            state.query = action.payload;
        },
       
    }
});
export default slice.reducer;
export const { changeFilter } = slice.actions;