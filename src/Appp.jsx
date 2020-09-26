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

//METHOD 1
/*
import React, {useState} from "react";

const Appp = () => {

    //Use For NAME :

    const [name, setName] = useState('')
    const [fullName, setFullName] = useState('')

//Use For Password:

    const [password, setPassword] = useState('')
    const [pass, setPass] = useState('')

    const inputEvent = (event) => {
        setName(event.target.value)
    }

    const inputEvent1 = (event) => {
        setPassword(event.target.value)
    }

    const inputSubmit = (event) => {
        event.preventDefault();
        setFullName(name)
        setPass(password)
    }

    return (
        <>
            <div className={'main_div'}>

//form using 'CLick' Event

                <form onClick={inputSubmit}>
                    <div>
                        <h1>Hello {fullName} : {pass}</h1>
                        <input type={'text'} placeholder={'Enter Your Name'} onChange={inputEvent} value={name}/>
                        <input type={'text'} placeholder={'Enter Your password'} onChange={inputEvent1}
                               value={password}/>
                        <button type={'Submit'}> Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Appp;

 */

/*
//METHOD 2

import React, {useState} from "react";


const Appp = () => {

    //input value hook State
    const [name, setName] = useState();
    const [lname, setLname] = useState()
    const [sname, setSname] = useState()


    //submit value hook State
    const [name1, setName1] = useState();
    const [lname1, setLname1] = useState();
    const [Sname1, setSname1] = useState()


    const inputEvent = (event) => {
        // console.log(event.target.value)
        setName(event.target.value);
    }

    const inputEvent1 = (event) => {
        setLname(event.target.value)
    }

    const inputEvent2 = (event) => {
        setSname(event.target.value)
    }

    const inputSubmit = () => {
        setName1(name)
        setLname1(lname)
        setSname1(sname)
    }

    return (
        <>
            <div>
                <h1>Hello {name1} {lname1} {Sname1} </h1>
                <input type={'text'} placeholder={'Enter your Name'} onChange={inputEvent} value={name}/>
                <input type={'text'} placeholder={'Enter Your Lastname'} onChange={inputEvent1} value={lname}/>
                <input type={'text'} placeholder={'Enter Your Surnamename'} onChange={inputEvent2} value={sname}/>
                <button onClick={inputSubmit}>Submit</button>
            </div>
        </>

    )
};


export default Appp;

 */


//Using 1 hook State and Multiple Input form State


import React, {useState} from "react";

const Appp = () => {

    //Use For NAME :

    const [fullName, setFullName] = useState({
        fname: '',
        lname: ''
    })


    const inputEvent = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)

        const value = event.target.value;
        const name = event.target.name

        setFullName((previousState) => {
                if (name === 'fName') {
                    return {
                        fname: value,
                        lname: previousState.lname
                    };

                } else if (name === 'lName') {
                    return {
                        fname: previousState.fname,
                        lname: value
                    }
                }

            }
        )


    }

    const inputSubmit = (event) => {
        event.preventDefault();
        // alert('Form Submitted')
    }

    return (
        <>
            <div>
                //form using 'CLick' Event
                <form onClick={inputSubmit}>
                    <div>
                        <h1>Hello {fullName.fname} {fullName.lname} </h1>

                        <input type={'text'}
                               placeholder={'Enter Your Name'}
                               name={'fName'}
                               onChange={inputEvent}
                               value={fullName.fname}/>

                        <input type={'text'}
                               placeholder={'Enter Your Lastname'}
                               name={'lName'}
                               onChange={inputEvent}
                               value={fullName.lname}/>

                        <button type={'Submit'}> Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Appp;

