//USE PARAMS

import React from "react";
import {useParams} from 'react-router-dom'

// const User = ({match}) => {
//     return (
//         <>
//             <h1>user page {match.params.name}</h1>
//         </>
//     )
// };
const User = ({match}) => {
    const {name, lname} = useParams();
    return (
        <>
            <h1>user page {name} {lname} </h1>
        </>
    )
};


export default User;