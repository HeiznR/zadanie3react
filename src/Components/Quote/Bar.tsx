import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const QuoteBar = () => {
    const quotesData = useTypedSelector((state) => state.data.data);
    let randomQuoute = Math.floor(Math.random() * quotesData.length);
    return (
        <div>
            <div>
                {quotesData[0].author === ""
                    ? ""
                    : `"${quotesData[randomQuoute].quote}"`}
            </div>
            <div>{quotesData[randomQuoute].author}</div>
        </div>
    );
};

export default QuoteBar;
