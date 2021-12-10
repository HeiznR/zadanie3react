import { useEffect } from "react";
import { fetchData } from "../../redux/actions/fetchData";
import useQuote from "../../hooks/useQuote";
import styles from "./Bar.module.scss";

const QuoteBar = () => {
    const { url, dispatch, quotesData, activeIndex } = useQuote();

    useEffect(() => {
        dispatch(fetchData(url));
    }, [dispatch, url]);

    return (
        <div className={styles.quoteBar}>
            <div>{`"${quotesData.data[activeIndex].quote}"`}</div>
            <div>{quotesData.data[activeIndex].author}</div>
        </div>
    );
};

export default QuoteBar;
