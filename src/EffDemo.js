import React from 'react';
function EffDemo() {
    const [counter, setCounter] = React.useState(0)
    const [counter1, setCounter1] = React.useState(0)
    return (<>
        {counter}<br />
        <input type='button' onClick={() => setCounter(counter + 1)} value="+" />
        {counter1}<br />
        <input type='button' onClick={() => setCounter1(counter1 + 1)} value="+" />

    </>);
}

export default EffDemo;