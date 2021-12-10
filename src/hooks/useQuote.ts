import { useDispatch } from "react-redux";
import {
    setDisabledPrevQuoteButton,
    setUpIndices,
} from "../redux/reducers/fetchingDataReducer";
import { useTypedSelector } from "./useTypedSelector";

const useQuote = () => {
    const dispatch = useDispatch();
    const quotesData = useTypedSelector((state) => state.fetch);
    const url = String(process.env.REACT_APP_URL);
    const activeIndex = quotesData.activeIndex;
    const isErrorOccured = quotesData.error.isErrorOccured;
    const prevButtonDisabled = quotesData.prevButtonDisabled;

    const settingQuotes = (value: string) => {
        if (value === "New quote") {
            dispatch(setUpIndices(true));
            dispatch(setDisabledPrevQuoteButton(true));
        } else {
            dispatch(setUpIndices(false));
            dispatch(setDisabledPrevQuoteButton(false));
        }
    };

    return {
        quotesData,
        isErrorOccured,
        prevButtonDisabled,
        activeIndex,
        url,
        settingQuotes,
        dispatch,
    };
};

export default useQuote;
