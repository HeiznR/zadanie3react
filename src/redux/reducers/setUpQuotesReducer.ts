import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponseData } from "../../types/IResponseData";

interface IProps {
    active: number;
    prevQuote: number;
    currentQuote: number;
    
}

const initialState: IProps = {
    active: 0,
    prevQuote: -1,
    currentQuote: 0,
};

const setUpQuotesReducer = createSlice({
    name: "setQuotes",
    initialState,
    reducers: {
        setUpQuotes(state, action: PayloadAction<IResponseData[]>) {
            state.active = Math.floor(Math.random() * action.payload.length);
            state.prevQuote = state.currentQuote;
            state.currentQuote = state.active;
        },
        setActiveQuote(state, action: PayloadAction<number>) {
            action.payload === 1
                ? (state.active = state.currentQuote)
                : (state.active = state.prevQuote);
        },
    },
});

export default setUpQuotesReducer.reducer;
export const { setUpQuotes, setActiveQuote } = setUpQuotesReducer.actions;
