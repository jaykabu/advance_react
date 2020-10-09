import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className={'menu_style'}>
                <NavLink exact activeClassName={'active_class'} to={'/'}>Home</NavLink>
                <NavLink exact activeClassName={'active_class'} to={'/about'}>About</NavLink>
                <NavLink exact activeClassName={'active_class'} to={'/services'}>Services </NavLink>
                <NavLink exact activeClassName={'active_class'} to={'/search'}>Search </NavLink>
                <NavLink exact activeClassName={'active_class'} to={'/contact'}>Contact us </NavLink>
                <NavLink exact activeClassName={'active_class'} to={'/user/jay/kabu'}>User </NavLink>
            </div>
        </>
    )
};

export default Navbar;