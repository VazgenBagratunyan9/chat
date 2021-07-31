import React, {useContext} from 'react';
import {Context} from "../app/App";
import style from './header.module.scss';
import classnames from 'classnames'
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";


const Header = (props) => {
    const {status} = useContext(Context)
    const logout = async () => {
        const data = new FormData()
        data.append('id', props.id);
       await fetch('https://bewedoc.ru/api/user/logout',{
            method:'POST',
            body: data
        }).then(res => res.json())
           .then(res => {
               localStorage.setItem('token', '')
           })

    }
    return (
        <header className={classnames( style.header)}>
            <div className={classnames( style.logo)}>
                <Link to={'/'}>
                    <h2>Bewedoc</h2>
                </Link>
            </div>
            <nav className={classnames(style.navigation)}>
                {
                    !status?
                        <>
                            <NavLink to={'login'}>Login</NavLink>
                            <NavLink to={'registration'}>Registration</NavLink>
                        </>
                        :
                        <a href={'/login'} onClick={logout}>Logout</a>

                }
            </nav>
        </header>
    );
};

export default Header;
