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


// import React, {useState} from "react";
//
// const Appp = () => {
//
//     let Time = new Date().toLocaleTimeString()
//
//     const [ctime, setCtime] = useState(Time)
//
//
//     const Ctime = () => {
//         let newTime = new Date().toLocaleTimeString()
//         setCtime(newTime);
//     }
//
//     return (
//         <>
//             <h1>{ctime}</h1>
//             <button onClick={Ctime}> Get Time</button>
//         </>
//     )
// }
//
//
// export default Appp;


// import React, {useState} from "react";
//
// const Appp = () => {
//
//     const purple = "8e44ad";
//     const [bg, setBg] = useState(purple)
//     const [name , setName] = useState("CLICK ME")
//
//     const bgChange = () => {
//         const cRed = "#FE2E2E";
//          setBg(cRed)
//         setName('Ouch 😲');
//     }
//
//     const cColor = () => {
//         let cBlue = "black";
//         setBg(cBlue)
//         setName('angry 😠')
//
//     }
//
//     return (
//         <>
//             <div style={{backgroundColor: bg}}>
//                 <button onClick={bgChange}  onDoubleClick={cColor} >{name}  </button>
//             </div>
//         </>
//     )
// };
//
// export default Appp;
//
//


import React, {useState} from "react";

const Appp = () => {

    const [name , setName] = useState('')
    const [fullName , setFullName] = useState('')


    const inputEvent = (event)=>{
       // console.log(event.target.value)
       setName(event.target.value)
    }

    const inputSumit = ()=>{
        setFullName(name)
    }

    return (
        <>
            <div>
                <h1>Hello {fullName}</h1>
                <input type={'text'}  placeholder={'Enter Your Name'} onChange={inputEvent} value={name}/>
                <button onClick={inputSumit}>Submit</button>
            </div>
        </>
    )
};

export default Appp;