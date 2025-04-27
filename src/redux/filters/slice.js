import { createSlice } from '@reduxjs/toolkit';

 
 const slice = createSlice({
   name: 'filters',
   initialState: {
     name: '',
   },
   reducers: {
     changeFilter: (state, action) => {
       state.name = action.payload;
     },
   },
 });
 
 export default slice.reducer;
 export const { changeFilter } = slice.actions;

// import { createSlice } from "@reduxjs/toolkit";

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: {
//     name: "",
//   },
//   reducers: {
//     setNameFilter(state, action) {
//       state.name = action.payload;
//     },
//   },
// });

// export const { setNameFilter } = filtersSlice.actions;
// export const selectNameFilter = (state) => state.filters.name;
// export default filtersSlice.reducer;