import React from 'react';
function Hookdemo() {

    const [counter, setCounter] = React.useState(99)
    const [color, setColor] = React.useState("Red")
    const [name, setName] = React.useState("")

    return (<>
        <h1>Counter Example</h1>
        Counter Value is {counter}
        <input type='button' value="+" onClick={()=>setCounter(100)}/>
        <hr/>
        Color Value is {color}
        <input type='button' value="Update" onClick={()=>setColor("Blue")}/>
        <hr/>
        Name :<input type='text' onChange={(e)=>setName(e.target.value)}/>
        Name is {name}
    </>)
}
export default Hookdemo