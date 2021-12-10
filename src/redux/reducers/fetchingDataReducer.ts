import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponseData } from "../../types/IResponseData";

interface IProps {
    data: IResponseData[];
    isErrorOccured: boolean;
    errorText: string;
    massLength: number;
}

const initialState: IProps = {
    data: [{ quote: "", author: "" }],
    isErrorOccured: false,
    errorText: "",
    massLength: 0,
};

const fetchingDataReducer = createSlice({
    name: "fetchingDataReducer",
    initialState,
    reducers: {
        fetchingDataSucces(state, action: PayloadAction<IResponseData[]>) {
            state.data = action.payload;
            state.massLength = action.payload.length;
        },
        fetchingDataError(state, action: PayloadAction<string>) {
            state.isErrorOccured = true;
            state.errorText = action.payload;
        },
    },
});

export default fetchingDataReducer.reducer;
export const { fetchingDataSucces, fetchingDataError } =
    fetchingDataReducer.actions;
