// //CONTEXT API
//
// import React, {createContext} from 'react';
// import ComA from './ComA';
//
// const FirstName = createContext();
// const LastName = createContext();
//
// const ContextApi = () => {
//     return (
//         <>
//             <FirstName.Provider value={'JaY'}>
//                 <LastName.Provider value={'Kabu'}>
//                     <ComA/>
//                 </LastName.Provider>
//             </FirstName.Provider>
//         </>
//     )
// };
//
// export default ContextApi;
// export {FirstName, LastName};


//using useEffect Hook

// import React, {useEffect, useState} from "react";
//
// const ContextApi = () => {
//
//     const [num , setNum] = useState(0);
//     const [num1 , setNum1] = useState(0);
//
//
//     useEffect(()=>{
//         alert('clicked')
//     }, [num]);
//
//     const inputEvent = ()=> {
//         setNum(num + 1);
//     }
//
//     const inputEvent1 = ()=>{
//         setNum1(num1 + 1)
//     }
//     return (
//         <>
//             <h1>{num}</h1>
//             <button onClick={inputEvent}>Click Me</button>
//
//             <br/>
//
//             <h1>{num1}</h1>
//             <button onClick={inputEvent1}>Click Me</button>
//         </>
//     )
// };
//
// export default ContextApi;


//challenge

import React, {useEffect, useState} from "react";

const ContextApi = () => {

    const [num, setNum] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${num} times`;
    })

    const inputEvent = () => {
        setNum(num + 1)
    }
    return (
        <>
            <h1> {num} </h1>
            <button onClick={inputEvent}> Click Me</button>
        </>
    )
};

export default ContextApi;



