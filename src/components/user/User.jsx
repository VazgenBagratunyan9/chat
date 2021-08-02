import React from 'react';
import styles from './user.module.scss';
import classnames from "classnames";

const User = ({user}) => {
    if (user.data){
        const link = `https://${user.data.email.split('@')[1]}`;
        if (user.data.verifite_email !== null) {
            return (
                <div className={classnames(styles.user)}>
                    <h2>{user.data.full_name}</h2>
                </div>
            );
        }else {
            return (
                <div className={classnames(styles.user)}>
                    <a target='_blank' href={link} className={classnames(styles.verificate_message)}>please confirm your account, an email has been
                        sent to this mail: {user.data.email} </a>
                </div>
            );
        }
    }
    return (<></>)


}


export default User;