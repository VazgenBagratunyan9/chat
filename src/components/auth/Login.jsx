import React, {useEffect, useState} from 'react';
import classnames from 'classnames'
import styles from './auth.module.scss'
import {loginAction} from "../../redux/user/user.action";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Redirect} from "react-router";
const Login = (props) => {
    const [error, setError] = useState('');
    const [redirect, setRedirect] = useState(false);
    const url = 'https://bewedoc.ru/api/user/login';
    const login = async (e) => {
        e.preventDefault();
        let dataForm = new FormData(e.target);
        const request = fetch(url, {
            method: 'POST',
            body: dataForm
        });
        const data = (await request).json();
        data.then(res => {
           if (res.status){
               setRedirect(true)
                setError('')
               localStorage.setItem('token', res.token)
               props.dispatch(loginAction(res.status))

           }else{
               setError(res.message)
           }
        })

    }
    useEffect(() => {

        return () => {
            console.log(redirect)
            setRedirect(false)
        }
    },[])

    return (
        <>
            {
                redirect?<Redirect to={'/'} />:''
            }
            <form className={classnames(styles.form)} onSubmit={login}>
                <h2>Login</h2>
                <p>{error}</p>
                <input type="email" name='email' placeholder='email'/>
                <input type="password" name='password' placeholder='password'/>
                <button type='submit'>Login</button>
            </form>
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Login);