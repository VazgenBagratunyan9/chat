import styles from './Chat.module.scss';
import {data} from './data'
import UserItem from "./component/userItem/UserItem";
import {useEffect,useRef} from "react";


const Chat = ()=>{
    const scrollBar = useRef()
    useEffect(()=>{
        console.log(scrollBar.current.scrollHeight)
        const scrollHeight = scrollBar.current.scrollHeight
        scrollBar.current.scrollTo(0,scrollHeight)
    },[data])
    return (
        <div className={styles.container}>
            <div className={styles.chat} ref={scrollBar}>
                {
                    data.map(user=>{
                        return(
                           <UserItem key={user.id} {...user} />
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