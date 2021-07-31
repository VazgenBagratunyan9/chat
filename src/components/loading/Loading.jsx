import React from 'react';
import styles from './loading.module.scss';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
    return (
        <div className={styles.loading}>
            <Loader
                type="MutatingDots"
                color="#066f7d"
                secondaryColor="#ff8300"
                height={100}
                width={100}
            />
        </div>
    );
};

export default Loading;