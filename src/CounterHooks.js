import React from 'react';
function CounterHooks() {

    const [counter, setCounter] = React.useState(0)
    const [msg,setMsg] = React.useState("")

    const incrementData = () =>{
        if(counter>=5){
                setMsg("Sorry>5")
        }else{
            setCounter(counter+1)
            setMsg("")
        }
    }
    const decrementData = () =>{
        if(counter<=0){
                setMsg("Sorry<0")
        }else{
            setCounter(counter-1)
            setMsg("")
        }
    }
    return (<>
        <h1>{counter}</h1>
        
        <input type='button' valu="+" 
        onClick={incrementData} />
        <input type='button' value="-" 
        onClick={decrementData} />
        <input type='button' value="x" onClick={()=>setCounter(0)}/>
        {msg}
    </>)

}
export default CounterHooks