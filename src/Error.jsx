//ROUTER

import React from "react";
import {NavLink} from "react-router-dom";

const Error = () => {
    return (
        <>

            <div style={{
                textAlign: 'center',
                marginTop: '20%',
                fontSize: '21px',
                fontFamily: 'source code pro',
                color: 'blue'
            }}
            >
                <h1>500 Oops ! Server Side Error.</h1>
                <p style={{fontSize: '20px', paddingTop: '15px'}}> Sorry , This page
                    doesn't exist </p>
                <NavLink to={'/'}>Go Back</NavLink>
            </div>

        </>
    )
};


export default Error;
