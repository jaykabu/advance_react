//CONTEXT API

import React, {createContext} from 'react';
import ComA from './ComA';

const FirstName = createContext();
const LastName = createContext();

const ContextApi = () => {
    return (
        <>
            <FirstName.Provider value={'JaY'}>
                <LastName.Provider value={'Kabu'}>
                    <ComA/>
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )
};

export default ContextApi;
export {FirstName, LastName};
