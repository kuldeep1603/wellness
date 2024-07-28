import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchData = createAsyncThunk("fetchdata", async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data
});

const DataSlice = createSlice({
    name: "Data",
    initialState: {
        Loading: false,
        Error: false,
        data: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(FetchData.pending, (state, action) => {
            state.Loading = true;
            state.Error = false;
        });
        builder.addCase(FetchData.fulfilled, (state, action) => {
            state.Loading = false;
            state.data = action.payload;
        });
        builder.addCase(FetchData.rejected, (state, action) => {
            state.Loading = false;
            state.Error = true;
        })
    }
});

export default DataSlice.reducer;