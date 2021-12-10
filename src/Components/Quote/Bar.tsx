import { useEffect } from "react";
import { fetchData } from "../../redux/actions/fetchData";
import useQuote from "../../hooks/useQuote";
import styles from "./Bar.module.scss";

const QuoteBar = () => {
    const { url, dispatch, quotesData, activeQuote } = useQuote();

    useEffect(() => {
        dispatch(fetchData(url));
    }, [dispatch, url]);

    return (
        <div className={styles.quoteBar}>
            <div>{`"${quotesData.data[activeQuote].quote}"`}</div>
            <div>{quotesData.data[activeQuote].author}</div>
        </div>
    );
};

export default QuoteBar;
