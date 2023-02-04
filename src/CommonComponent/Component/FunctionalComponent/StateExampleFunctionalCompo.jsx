import React from 'react';
import { useState } from 'react';

const StateExampleFunctionalCompo = () => {
    // const data = "something"
    const [statedata,setData] = useState("something")
    const [count,setCount] = useState(0)
    let data = "something"
    let btnClick = ()=> {
        console.log("called");
        data = "Chacking"
        console.log(data);
        setData("data")
    }
    let increment = ()=> {
        setCount(count+1)
    }
    let decrement = ()=> {
        setCount(count-1)
    }
    return (
        <>
            simple variable data : {data}
            <br />
            State data : {statedata}
            <br />
            <button onClick={btnClick}>Click</button>
            <h2>increment decrement</h2>
            <button onClick={increment}>increment</button> {count} 
            <button onClick={()=>{ setCount(count-1)}}>decrement</button>
        </>
    );
};

export default StateExampleFunctionalCompo;