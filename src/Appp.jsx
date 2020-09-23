import React, {useState} from "react";

// USE STATE IN HOOK

const Appp = () => {

    const state = useState()

    const [count, setCount] = useState(0);

    const IncNub = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={IncNub}>Click Me</button>
        </>
    )
};

export default Appp;

