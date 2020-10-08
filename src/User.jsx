//USE PARAMS

import React from "react";
import {useLocation, useParams} from 'react-router-dom'


const User = () => {
    const {name, lname} = useParams();
    const location = useLocation();
    return (
        <>
            <h1>user page {name} {lname}  </h1>
            <p>MY CURRENT LOCATION IS {location.pathname}</p>

            {location.pathname === `/user/jay/kabu` ? (
                <button onClick={() => {
                    alert('you are awesome')
                }}>Click me</button>
            ) : null}


        </>
    )
};


export default User;