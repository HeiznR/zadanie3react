import Button from "../Components/Button";
import QuoteBar from "../Components/Quote/Bar";
import useQuote from "../hooks/useQuote";

const MainPage = () => {
    const { settingQuotes } = useQuote();
    return (
        <div>
            <QuoteBar />
            <Button value="New quote" settingQuotes={settingQuotes} />
            <Button value="Prev quote" settingQuotes={settingQuotes} />
        </div>
    );
};

export default MainPage;
