import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponseData } from "../../types/IResponseData";

interface IProps {
    data: IResponseData[];
    isErrorOccured: boolean;
    errorText: string;
    massLength: number;
    active: number;
    prevQuote: number;
    currentQuote: number;
}

const initialState: IProps = {
    data: [{ quote: "", author: "" }],
    isErrorOccured: false,
    errorText: "",
    massLength: 0,
    active: 0,
    prevQuote: -1,
    currentQuote: 0,
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
        closePopUp(state) {
            state.isErrorOccured = false;
        },
        setUpQuotes(state, action: PayloadAction<number>) {
            if (action.payload === 1) {
                state.active = Math.floor(Math.random() * state.data.length);
            } else {
                state.active = state.prevQuote;
            }
            state.prevQuote = state.currentQuote;
            state.currentQuote = state.active;
        },
    },
});

export default fetchingDataReducer.reducer;
export const {
    fetchingDataSucces,
    fetchingDataError,
    setUpQuotes,
    closePopUp,
} = fetchingDataReducer.actions;
