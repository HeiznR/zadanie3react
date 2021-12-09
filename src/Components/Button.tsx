import React from "react";
import { useDispatch } from "react-redux";
import { fetchingData } from "../redux/actions/AsyncFetchingData";

const Button = () => {
    const dispatch = useDispatch();
    return (
        <button
            onClick={() =>
                dispatch(
                    fetchingData(
                        "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
                    )
                )
            }
        >
            asdfsadf
        </button>
    );
};

export default Button;
