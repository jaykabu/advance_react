// import React, {useState} from "react";
//
// // USE STATE IN HOOK
//
// const Appp = () => {
//
//     const [count, setCount] = useState(0);
//
//     const IncNub = () => {
//         setCount(count + 1)
//     }
//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={IncNub}> Click Me </button>
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


import React, {useState} from "react";

const Appp = () => {

    const purple = "8e44ad";
    const [bg, setBg] = useState(purple)
    const [name, setName] = useState("CLICK ME")

// Single CLick
    const bgChange = () => {
        const cRed = "#FE2E2E";
        setBg(cRed)
        setName('Ouch 😲');
    }
//DoubleClick
    const cColor = () => {
        let cBlue = "black";
        setBg(cBlue)
        setName('angry 😠')

    }
    return (
        <>
            <div style={{backgroundColor: bg}}>
                <button onClick={bgChange} onDoubleClick={cColor}>{name}  </button>
            </div>
        </>
    )
};

export default Appp;

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


// import React, {useState} from "react";
//
// const Appp = () => {
//
//     //Use For NAME :
//
//     const [fullName, setFullName] = useState({
//         firstname: '',
//         lastname: '',
//         email: '',
//         phone: ''
//     })
//
//
//
//     const inputEvent = (event) => {
//         console.log(event.target.value)
//         console.log(event.target.name)
//
//         // const value = event.target.value;
//         // const name = event.target.name;
// //Array Dis
//
//         const {value, name} = event.target
//
//         setFullName((previousState) => {
//
//                 return {
//                     ...previousState,
//                     [name]: value
//                 }
//
//
//                 // if (name === 'fName') {
//                 //     return {
//                 //         fname: value,
//                 //         lname: previousState.lname,
//                 //         email: previousState.email,
//                 //         phone: previousState.phone
//                 //
//                 //     };
//                 //
//                 // } else if (name === 'lName') {
//                 //     return {
//                 //         fname: previousState.fname,
//                 //         lname: value,
//                 //         email: previousState.email,
//                 //         phone: previousState.phone
//                 //     }
//                 // } else if (name === 'email') {
//                 //     return {
//                 //         fname: previousState.fname,
//                 //         lname: previousState.lname,
//                 //         email: value,
//                 //         phone: previousState.phone
//                 //     }
//                 // } else if (name === 'phone') {
//                 //     return {
//                 //         fname: previousState.fname,
//                 //         lname: previousState.lname,
//                 //         email: previousState.email,
//                 //         phone: value
//                 //     }
//                 //
//                 // }
//             }
//         )
//     }
//
//     const inputSubmit = (event) => {
//         event.preventDefault();
//
//     }
//
//     //form using 'CLick' Event
//
//     return (
//         <>
//             <div>
//
//
//                 <form onClick={inputSubmit}>
//                     <div>
//                         <h1> Login   </h1>
//                         <p>{fullName.firstname}{fullName.lastname}</p>
//                             <p> {fullName.email} </p>
//                             <p> {fullName.phone} </p>
//
//                         <input type={'text'}
//                                placeholder={'Enter Your Name'}
//                                name={'firstname'}
//                                onChange={inputEvent}
//                                value={fullName.firstname}/>
//
//                         <input type={'text'}
//                                placeholder={'Enter Your Lastname'}
//                                name={'lastname'}
//                                onChange={inputEvent}
//                                value={fullName.lastname}/>
//
//                         <input type={'email'}
//                                placeholder={'Enter Your Email'}
//                                name={'email'}
//                                onChange={inputEvent}
//                                value={fullName.email}/>
//
//                         <input type={'number'}
//                                placeholder={'Enter Your PhoneNumber'}
//                                name={'phone'}
//                                onChange={inputEvent}
//                                value={fullName.phone}/>
//
//                         <button type={'Submit'}> Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// };
//
// export default Appp;


// import React, {useState} from "react";
// import './index.css';
//
//
// const Appp = () => {
//
//     const [fullName, setFullName] = useState({
//         name: "",
//         email: "",
//         pass: ""
//     });
//
//     const eventInput = (event) => {
//         const {value, name} = event.target
//
//         setFullName((preState) => {
//             return {
//                 ...preState,
//                 [name]: value
//             }
//         })
//     }
//
//     const inputSubmit = (event) => {
//         event.preventDefault();
//
//         setFullName(fullName)
//     }
//
//
//     return (
//         <>
//
//             <div className="limiter">
//                 <div className="container-login100">
//                     <div className="wrap-login100">
//                         <div className="login100-pic js-tilt" data-tilt>
//                             <img src="" alt="IMG"/>
//                         </div>
//                         <form className="login100-form validate-form" onClick={inputSubmit}>
// 					<span className="login100-form-title">
// 						Member Login
// 					</span>
//
//                             {/*<h1> Login </h1>*/}
//                             {/*<p>{fullName.name}</p>*/}
//                             {/*<p> {fullName.email} </p>*/}
//                             {/*<p> {fullName.pass} </p>*/}
//
//                             <div className="wrap-input100 validate-input"
//                                  data-validate="Valid email is required: ex@abc.xyz">
//                                 <input className="input100" type="text" name="name" onChange={eventInput}
//                                        placeholder="name" value={fullName.name}/>
//                                 <span className="focus-input100"></span>
//                                 <span className="symbol-input100">
// 							<i className="fa fa-envelope" aria-hidden="true"></i>
// 						</span>
//                             </div>
//                             <div className="wrap-input100 validate-input"
//                                  data-validate="Valid email is required: ex@abc.xyz">
//                                 <input className="input100" type="text" name="email" onChange={eventInput}
//                                        placeholder="Email" value={fullName.email}/>
//                                 <span className="focus-input100"></span>
//                                 <span className="symbol-input100">
// 							<i className="fa fa-envelope" aria-hidden="true"></i>
// 						</span>
//                             </div>
//
//                             <div className="wrap-input100 validate-input" data-validate="Password is required">
//                                 <input className="input100" type="password" name="pass" onChange={eventInput}
//                                        placeholder="Password" value={fullName.pass}/>
//                                 <span className="focus-input100"></span>
//                                 <span className="symbol-input100">
// 							<i className="fa fa-lock" aria-hidden="true"></i>
// 						</span>
//                             </div>
//
//                             <div className="container-login100-form-btn">
//                                 <button className="login100-form-btn">
//                                     Login
//                                 </button>
//                             </div>
//
//
//                         </form>
//
//                     </div>
//                 </div>
//             </div>
//
//         </>
//     )
// }
// export default Appp;