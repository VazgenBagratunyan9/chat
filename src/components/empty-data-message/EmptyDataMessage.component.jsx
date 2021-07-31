import { useSelector } from "react-redux";
import styles from "./empty-data-message.module.scss";

import { Container } from "./emptyDataMessage.styled";

const EmptyDataMessage = (props) => {
    const { children, height } = props;

    const favorites = useSelector((state) => state.shop.favorites);
    const hasData = !!favorites.length;
    const message = "There is no selected items";
    return hasData ? (
        children
    ) : (
        <Container height={height} className={styles.container}>
            <div>{message}</div>
        </Container>
    );
};

export default EmptyDataMessage;
