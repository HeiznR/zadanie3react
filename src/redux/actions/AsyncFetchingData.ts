import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IResponseData } from "../../types/responseData";
import { fetchDataError, fetchDataSucces } from "../reducers/fetchQuote";

export const fetchingData = createAsyncThunk(
    "handleFetching/fetchingData",
    async function (url: string, { dispatch }) {
        try {
            const response = await axios.get<IResponseData[]>(url);
            dispatch(fetchDataSucces(response.data));
            console.log(response.data);
        } catch (error) {
            dispatch(fetchDataError("No data found under this link"));
        }
    }
);
