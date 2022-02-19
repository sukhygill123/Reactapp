import React, { useEffect, useState } from "react";


const App15=()=>{
    const [num, setNum]=useState(0);
    const [nums, setNums]=useState(0);

    useEffect(()=>{
        alert('clicked');
    }, [num])



    
    return(
        <>
            <h1>{num}</h1>
            <h1>{nums}</h1>
            <button onClick={()=>{setNum(num+1);}}>Click me</button>
            <br></br>
            <button onClick={()=>{setNums(nums+1);}}>Click me</button>
        </>
    )
}
export default App15