import Loader from "src/components/loader/Loader.component";
import styles from "./wrapper-loader.module.scss";

const WrapperLoader = (props) => {
    const { children, isLoading } = props;

    return isLoading ? (
        <div className={styles.container}>
            <Loader />
        </div>
    ) : (
        children
    );
};

export default WrapperLoader;
