import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../css/Header.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
// import { useStoreContext } from "../../utils/GlobalState";
// import { NavLink } from 'react-router-dom';


function Header(props) {

    const {
        headerLinks = [],
        currentHeaderLink,
        setCurrentHeaderLink
    } = props

    
    // useEffect(() => {
    //     if(result === 'owner' || result === 'admin'){
    //         setCurrentLink(result === 'owner' ? links[1] : links[2]);
    //     }
    // }, [result, links]);

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    const setDark = event => {
        event.preventDefault();

        var body = document.querySelectorAll('body, .page');
        body[0].style.backgroundColor = 'black';
        body[0].style.color = 'white';


    }

    const setLight = event => {
        event.preventDefault();

        var body = document.querySelectorAll('body, .page');
        body[0].style.backgroundColor = 'white';
        body[0].style.color = 'black';

    }

    return (
            <div className="header-items">
                <div className="bold logo-name">
                    KING SEAFOOD
                </div>
                <div className="header-links-container">
                    {headerLinks.map((link) => (
                        <Link key={link.name} to={link.href} className={`header-link ${currentHeaderLink.name === link.name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(link)}}>{link.name}</Link>
                    ))}
                    <div onClick={setDark}><i className="far fa-moon header-icon"></i></div>
                    <div onClick={setLight}><i className="far fa-sun header-icon"></i></div>
                </div>
            </div>
    )
}

export default Header;