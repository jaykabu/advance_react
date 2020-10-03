//CONTEXT API

import React from "react";
import {FirstName, LastName} from "./ContextApi";

const ComC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    <h1>
                                        My Name Is {fname} {lname}
                                    </h1>
                                );
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>

        </>
    )
};

export default ComC;