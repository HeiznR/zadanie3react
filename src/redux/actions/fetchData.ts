import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IResponseData } from "../../types/IResponseData";
import {
    fetchingDataError,
    fetchingDataSucces,
    setUpQuotes,
} from "../reducers/fetchingDataReducer";

export const fetchData = createAsyncThunk(
    "fetchingDataReducer/fetchData",
    async function (url: string, { dispatch }) {
        try {
            const response = await axios.get<IResponseData[]>(url);
            await dispatch(fetchingDataSucces(response.data));
            await dispatch(setUpQuotes(1));
        } catch (error) {
            dispatch(fetchingDataError("No data found under this link"));
        }
    }
);
