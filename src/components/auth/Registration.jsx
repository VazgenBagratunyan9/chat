import React, {useEffect, useState} from 'react';
import classnames from 'classnames'
import styles from './auth.module.scss'

import {handleInput, inputState, setInputState} from '../../hooks/useInput.hook'

import {Redirect} from "react-router";
import {HOST_NAME} from "../../config/config";

const Registration = () => {
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const registration = async (e) => {
        e.preventDefault();
        const dataForm = new FormData(e.target);
        await fetch(HOST_NAME + '/user/registration',{
            method: 'POST',
            body:dataForm
        }).then(res => res.json())
            .then(data => {
                if (data.status){
                    setTimeout(() => {
                        setRedirect(true)
                    },2000)
                }
                setStatus(data.status)
                setMessage(data.message)
            })
    }
    useEffect(() => {
        return () => {
            setRedirect(false)
            setMessage('')
            setStatus(false)
        }
    }, [])
    return (
        <form className={classnames(styles.form)} onSubmit={registration}>
            {
                redirect?<Redirect to={'/login'} />:''
            }
            <h2>Registration</h2>
            {
                message?<p className={classnames(status?styles.success:styles.error)}>{message}</p>:''
            }
            <input type="text" name='full_name' placeholder='Full Name'/>
            <input type="email" name='email' placeholder='email'/>
            <input type="password" name='password' placeholder='password'/>
            <input type="password" name='password_confirm' placeholder='password confirm'/>
            <button type='submit'>Registration</button>
        </form>
    );
};

export default Registration;