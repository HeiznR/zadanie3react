import { useDispatch } from "react-redux";
import { setActiveQuote, setUpQuotes } from "../redux/reducers/setUpQuotesReducer";
import { useTypedSelector } from "./useTypedSelector";

const useQuote = () => {
    const dispatch = useDispatch();
    const quotesData = useTypedSelector((state) => state.fetch);
    const url = String(process.env.REACT_APP_URL);
    const setUpData = useTypedSelector((state) => state.setUp);
    const activeQuote = setUpData.active;

    const settingQuotes = (value: string) => {
        if (value === "New quote") {
            dispatch(setUpQuotes(quotesData.data));
            dispatch(setActiveQuote(1));
        } else {
            dispatch(setActiveQuote(0));
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
