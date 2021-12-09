import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponseData } from "../../types/responseData";

interface IProps {
    data: IResponseData[];
    isErrorOccured: boolean;
    errorText: string;
}

const initialState: IProps = {
    data: [{ quote: "", author: "" }],
    isErrorOccured: false,
    errorText: "",
};

const fetchData = createSlice({
    name: "handleFetching",
    initialState,
    reducers: {
        fetchDataSucces(state, action: PayloadAction<IResponseData[]>) {
            state.data = action.payload;
        },
        fetchDataError(state,action: PayloadAction<string>) {
            state.isErrorOccured = true;
            state.errorText = action.payload;
        },
    },
});

export default fetchData.reducer;
export const { fetchDataSucces, fetchDataError } = fetchData.actions;
