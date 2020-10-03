//CONTEXT API

import React, {useContext} from 'react';
// import ComC from './ComC'
import {FirstName, LastName} from "./ContextApi";


const ComB = () => {

    const fname = useContext(FirstName)
    const lname = useContext(LastName)


    return (
        <>
            <h1>MY Name is {fname} {lname}</h1>
        </>
    )
};

export default ComB;