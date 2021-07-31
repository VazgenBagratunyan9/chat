import styles from "./oops.module.scss";

const Oops = (props) => {
    const { errorMessage, children } = props;
    return errorMessage ? <div className={styles.container}>{errorMessage}</div> : children;
};

export default Oops;
