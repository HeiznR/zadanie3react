import { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { closePopUp } from "../../redux/reducers/fetchingDataReducer";
import styles from "./Content.module.scss";

const ModalContent: FC = () => {
    const dispatch = useDispatch();
    const error = useTypedSelector((state) => state.fetch);
    return (
        <div className={styles.content}>
            <div className={styles.content__message}>{error.errorText}</div>
            <button
                className={styles.content__button}
                onClick={() => {
                    dispatch(closePopUp());
                }}
            >
                OK
            </button>
        </div>
    );
};

export default ModalContent;
