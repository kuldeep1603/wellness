import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
    name: "filter",
    initialState: {
        type: "",
        location: "",
    },
    reducers: {
        setType: (state, action) => {
            state.type = action.payload;
        },
        SetLocation: (state, action) => {
            state.location = action.payload;
        }
    }
});
export const { setType, SetLocation } = FilterSlice.actions;
export default FilterSlice.reducer;