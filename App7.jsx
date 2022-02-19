import React from "react";
import { useState } from "react/cjs/react.development";


const App7 = ()=>{
    const[name, setName] = useState(" ");
    const[fullName, setFullName] = useState();
    const[lname, setlName] = useState(" ");
    const[fulllName, setFulllName] = useState();
    const inp = (event)=>{ 
        setName(event.target.value)
        console.log(event.target.value);
    }
    const inp2 = (event)=>{ 
        setlName(event.target.value)
        console.log(event.target.value);
    }

    const btn = ()=>{
        setFullName(name)
        setFulllName(lname)
    }
    return(
        <>
            <h1>Hello {fullName} {fulllName}</h1><br></br>
            <input type={Text} placeholder="Enter Your Name" onChange={inp} value={name} />
            <br></br><br></br>
            <input type={Text} placeholder="Enter Your Name" onChange={inp2} value={lname} />
            <br></br><br></br>
            <button onClick={btn}>Click Me</button>
        </>
    )

}
export default App7