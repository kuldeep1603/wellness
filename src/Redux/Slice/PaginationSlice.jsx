import { createSlice } from "@reduxjs/toolkit";

const PaginationSlice = createSlice({
    name: "pagination",
    initialState: {
        page: 1,
    },
    reducers: {
        setpage: (state, action) => {
            state.page = action.payload;
        }
    }
});

export const { setpage } = PaginationSlice.actions;
export default PaginationSlice.reducer;