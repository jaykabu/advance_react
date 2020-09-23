// import React, {useState} from "react";
//
// // USE STATE IN HOOK
//
// const Appp = () => {
//
//     const state = useState()
//
//     const [count, setCount] = useState(0);
//
//     const IncNub = () => {
//         setCount(count + 1)
//     }
//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={IncNub}>Click Me</button>
//         </>
//     )
// };
//
// export default Appp;


import React, {useState} from "react";


const Appp = () => {

    let Time = new Date().toLocaleTimeString()

    const [ctime , setCtime] = useState(Time)


    const Ctime = ()=>{
     let  newTime = new Date().toLocaleTimeString()
        setCtime(newTime);
    }

    return (
        <>
            <h1>{ctime}</h1>
            <button onClick={Ctime}> Get Time</button>
        </>
    )
}


export default Appp;
