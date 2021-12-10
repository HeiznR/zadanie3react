import { useDispatch } from "react-redux";
import { setUpQuotes } from "../redux/reducers/fetchingDataReducer";
import { useTypedSelector } from "./useTypedSelector";

const useQuote = () => {
    const dispatch = useDispatch();
    const quotesData = useTypedSelector((state) => state.fetch);
    const url = String(process.env.REACT_APP_URL);
    const setUpData = useTypedSelector((state) => state.fetch);
    const activeQuote = setUpData.active;

    const settingQuotes = (value: string) => {
        if (value === "New quote") {
            dispatch(setUpQuotes(1));
        } else {
            dispatch(setUpQuotes(0));
        }
    };
    return {
        quotesData,
        settingQuotes,
        url,
        activeQuote,
        dispatch,
    };
};

export default useQuote;
