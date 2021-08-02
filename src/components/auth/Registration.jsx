import React, {useState} from 'react';
import classnames from 'classnames'
import styles from './auth.module.scss'
import {handleInput, inputState, setInputState} from '../../hooks/useInput.hook'
const Registration = () => {
    const [error, setError] = useState('')

    return (
        <form className={classnames(styles.form)}>
            <h2>Registration</h2>
            <p>error</p>
            <input type="text" name='full_name' placeholder='Full Name'/>
            <input type="email" name='email' placeholder='email'/>
            <input type="password" name='password' placeholder='password'/>
            <input type="password" name='password_confirm' placeholder='password confirm'/>
            <button type='submit'>Registration</button>
        </form>
    );
};

export default Registration;