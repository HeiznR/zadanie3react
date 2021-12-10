import Button from "../Components/Button";
import QuoteBar from "../Components/Quote/Bar";
import useQuote from "../hooks/useQuote";
import styles from "./MainPage.module.scss";

const MainPage = () => {
    const { settingQuotes } = useQuote();
    return (
        <div className={styles.qoute}>
            <QuoteBar />
            <div className={styles.qoute__buttons}>
                <Button value="New quote" settingQuotes={settingQuotes} />
                <Button value="Prev quote" settingQuotes={settingQuotes} />
            </div>
        </div>
    );
};

export default MainPage;
