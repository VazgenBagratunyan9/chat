import styles from './UserItem.module.scss'
import classNames from 'classnames'
const UserItem = ({url,fullName,text,userID}) => {
    const myID = '57sw78'
    const user = classNames({
        [styles.containerGuest]:userID===myID,
        [styles.containerOwner]:userID!==myID,
    })
    return (
        <div className={user}>
            <div className={styles.userInfo}>
                <span className={styles.image}>
                    <img src={url} alt="user image"/>
                </span>
                <span className={styles.name}>{fullName}</span>
            </div>
            <div className={styles.text}>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default UserItem