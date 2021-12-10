import Button from "../Components/Button/Button";
import QuoteBar from "../Components/Quote/Bar";
import useQuote from "../hooks/useQuote";
import { useTypedSelector } from "../hooks/useTypedSelector";
import styles from "./MainPage.module.scss";
import ModalWrapper from "../Components/Modal/Wrapper";
import ModalContent from "../Components/Modal/Content";

const MainPage = () => {
    const { settingQuotes } = useQuote();
    const error = useTypedSelector((state) => state.fetch);
    return (
        <div className={styles.qoute}>
            <QuoteBar />
            <div className={styles.qoute__buttons}>
                <Button value="New quote" settingQuotes={settingQuotes} />
                <Button value="Prev quote" settingQuotes={settingQuotes} />
            </div>
            {error.isErrorOccured && (
                <ModalWrapper>
                    <ModalContent />
                </ModalWrapper>
            )}
        </div>
    );
};

export default MainPage;
