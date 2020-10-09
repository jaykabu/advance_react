//ROUTER

import React from "react";
import {NavLink} from "react-router-dom";

const Error = () => {
    return (
        <>

            <div style={{
                textAlign: 'center',
                marginTop: '20%',
                fontSize: '20px',
                fontFamily: 'source code pro',
                color: 'blue'
            }}
            >
                <h1>404 Oops ! page not found.</h1>
                <p style={{fontSize: '20px', paddingTop: '15px', fontFamily: 'source code pro'}}> Sorry , This page
                    doesn't exist </p>
                <NavLink to={'/'}>Go Back</NavLink>
            </div>

        </>
    )
};


export default Error;