//USE PARAMS

import React from "react";
import {useLocation, useParams, useHistory} from 'react-router-dom'


const User = () => {
    const {name, lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    // console.log(history)
    return (
        <>
            <h1>user page {name} {lname}  </h1>
            <p>MY CURRENT LOCATION IS {location.pathname}</p>

            {location.pathname === `/user/jay/kabu` ? (
                <button onClick={() => {
                    // history.goBack()
                    history.push('/contact')
                }}>Click me</button>
            ) : null}

            <p></p>
        </>
    )
};


export default User;