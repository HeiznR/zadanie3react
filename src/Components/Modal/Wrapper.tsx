import { FC } from "react";
import { createPortal } from "react-dom";
import styles from "./Wrapper.module.scss";

const Modal: FC = ({ children }) => {
    return createPortal(
        <div className={styles.modal}>{children}</div>,
        document.body
    );
};

export default Modal;
