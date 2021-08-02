import styles from './Chat.module.scss';

import UserItem from "./component/userItem/UserItem";

import {useEffect, useRef, useState} from "react";
import Pusher from 'pusher-js';
import {HOST_NAME} from "../../config/config";
import { connect, useSelector} from  'react-redux'


const Chat = (props) => {
    const [data, setData] = useState([]);
    const scroll = useRef();

    const send = async (e) => {
        if (e.which === 13){
            e.preventDefault()
            const dataForm = new FormData();
            dataForm.append('message', e.target.value)
            dataForm.append('user_id', props.id)
            await fetch(HOST_NAME + '/message/send',{
                method:'POST',
                body:dataForm
            }).then(jsonData => jsonData.json())
                .then(res => {
                    if (res.status){
                        e.target.value = ''
                    }

                })
        }
    }


    useEffect( () => {
        Pusher.logToConsole = true;

        let pusher = new Pusher('ab088ff917001a1119d6', {
            cluster: 'eu'
        });

        let channel = pusher.subscribe('nordil');

        channel.bind('my-event', function(data) {
           setData(data)
        });
    }, [])

    useEffect(() => {
        scroll.current.scrollTop = scroll.current.scrollHeight;
    },[data])

    return (
        <div className={styles.container}>
            <div className={styles.chat} ref={scroll}>
                {
                    data.map(user=>{
                        return(
                           <UserItem key={user.id} {...user} />
                        )
                    })
                }
            </div>
            <div className={styles.text}>
                <textarea onKeyPress={send}> </textarea>
            </div>
        </div>
    )
}

export default connect()(Chat)