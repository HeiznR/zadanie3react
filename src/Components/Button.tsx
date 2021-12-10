import { FC } from "react";
import { IButton } from "../types/IButton";

const Button: FC<IButton> = ({ value, settingQuotes }) => {
    return <button onClick={() => settingQuotes(value)}>{value}</button>;
};

export default Button;
