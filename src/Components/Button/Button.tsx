import { FC } from "react";
import { IButton } from "../../types/IButton";
import styles from "./Button.module.scss";

const Button: FC<IButton> = ({ disabled, value, settingQuotes }) => {
    return (
        <button
            disabled={disabled}
            className={styles.button}
            onClick={() => {
                settingQuotes(value);
            }}
        >
            {value}
        </button>
    );
};

export default Button;
