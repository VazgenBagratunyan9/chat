import styles from "./button.module.scss";

const Button = (props) => {
    const { children, type = "button", isLoading, disabled, ...restProps } = props;
    return (
        <button className={styles.btn} type={type} disabled={isLoading || disabled} {...restProps}>
            {isLoading ? "Loading..." : children}
        </button>
    );
};

export default Button;
