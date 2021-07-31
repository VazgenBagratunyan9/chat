import { useRef } from "react";
import classNames from "classnames";
import styles from "./input.module.scss";

const Input = (props) => {
    const { label, value = "", ...restProps } = props;
    const inputRef = useRef();
    // const label = props.label;
    // const value = props.value;

    const labelClasses = classNames({
        [styles.label]: true,
        [styles.active]: value,
    });

    const handleLabelClick = (event) => {
        const el = inputRef.current;
        el.focus();
    };

    return (
        <div className={styles.container}>
            <input className={styles.input} value={value} {...restProps} ref={inputRef} />
            <label className={labelClasses} onClick={handleLabelClick}>
                {label}
            </label>
        </div>
    );
};

export default Input;
