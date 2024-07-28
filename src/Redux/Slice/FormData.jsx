import { createSlice } from "@reduxjs/toolkit";

const FormData = createSlice({
    name: "formData",
    initialState: {
        SearchData: ""
    },
    reducers: {
        SetSearchData: (state, action) => {
            state.SearchData = action.payload;
        }
    }
});

export const { SetSearchData } = FormData.actions;
export default FormData.reducer;