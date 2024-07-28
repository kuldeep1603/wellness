import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchSingleData = createAsyncThunk("FetchSingleData", async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data
});

const SingleData = createSlice({
    name: "Data",
    initialState: {
        Loading: false,
        Error: false,
        data: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(FetchSingleData.pending, (state, action) => {
            state.Loading = true;
            state.Error = false;
        });
        builder.addCase(FetchSingleData.fulfilled, (state, action) => {
            state.Loading = false;
            state.data = action.payload;
        });
        builder.addCase(FetchSingleData.rejected, (state, action) => {
            state.Loading = false;
            state.Error = true;
        })
    }
});

export default SingleData.reducer;