import styles from './Chat.module.scss';
import {data} from './data'
import UserItem from "./component/userItem/UserItem";


const Chat = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.chat}>
                {
                    data.map(user=>{
                        return(
                           <UserItem {...user} />
                        )
                    })
                }
            </div>
            <div className={styles.text}>
                <textarea></textarea>
            </div>
        </div>
    )
}

export default Chat