import { configureStore } from "@reduxjs/toolkit";

import DataSliceReducer from "./Slice/DataSlice";
import FormDataReducer from "./Slice/FormData"
import PaginationSliceReducer from "./Slice/PaginationSlice"
import FilterSliceReducer from "./Slice/FilterSlice"
import SingleDataReducer from "./Slice/SingleSlice"

const store = configureStore({
    reducer: {
        Data: DataSliceReducer,
        FormData: FormDataReducer,
        Pagination: PaginationSliceReducer,
        Filter: FilterSliceReducer,
        SingleData: SingleDataReducer,
    }
});

export default store;