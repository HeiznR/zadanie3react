import { useEffect } from "react";
import { fetchData } from "../../redux/actions/fetchData";
import useQuote from "../../hooks/useQuote";

const QuoteBar = () => {
    const { url, dispatch, quotesData, activeQuote } = useQuote();

    useEffect(() => {
        dispatch(fetchData(url));
    }, [dispatch, url]);

    return (
        <div>
            <div>{quotesData.data[activeQuote].quote}</div>
            <div>{quotesData.data[activeQuote].author}</div>
        </div>
    );
};

export default QuoteBar;
