import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IResponseData } from "../../types/IResponseData";
import {
    fetchingDataError,
    fetchingDataSucces,
} from "../reducers/fetchingDataReducer";
import { setUpQuotes } from "../reducers/setUpQuotesReducer";

export const fetchData = createAsyncThunk(
    "fetchingDataReducer/fetchData",
    async function (url: string, { dispatch }) {
        try {
            const response = await axios.get<IResponseData[]>(url);
            await dispatch(fetchingDataSucces(response.data));
            await dispatch(setUpQuotes(response.data));
        } catch (error) {
            dispatch(fetchingDataError("No data found under this link"));
        }
    }
);
