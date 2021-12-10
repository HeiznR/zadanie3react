import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError } from "../../types/IError";
import { IResponseData } from "../../types/IResponseData";

interface IProps {
    data: IResponseData[];
    massLength: number;
    error: IError;
    activeIndex: number;
    prevQuoteIndex: number;
    currentQuoteIndex: number;
    prevButtonDisabled: boolean;
}

const initialState: IProps = {
    data: [{ quote: "", author: "" }],
    massLength: 0,
    error: { isErrorOccured: false, errorText: "" },
    activeIndex: 0,
    prevQuoteIndex: -1,
    currentQuoteIndex: 0,
    prevButtonDisabled: true,
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
            state.error.isErrorOccured = true;
            state.error.errorText = action.payload;
        },
        closePopUp(state) {
            state.error.isErrorOccured = false;
        },
        setUpIndices(state, action: PayloadAction<boolean>) {
            action.payload === true
                ? (state.activeIndex = Math.floor(
                      Math.random() * state.data.length
                  ))
                : (state.activeIndex = state.prevQuoteIndex);
            state.prevQuoteIndex = state.currentQuoteIndex;
            state.currentQuoteIndex = state.activeIndex;
        },
        setDisabledPrevQuoteButton(state, action: PayloadAction<boolean>) {
            action.payload === true
                ? (state.prevButtonDisabled = false)
                : (state.prevButtonDisabled = true);
        },
    },
});

export default fetchingDataReducer.reducer;
export const {
    fetchingDataSucces,
    fetchingDataError,
    setUpIndices,
    closePopUp,
    setDisabledPrevQuoteButton,
} = fetchingDataReducer.actions;
