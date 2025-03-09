import { useMemo, useState } from 'react';

function UseMemoDemo() {
    const [number, setNumber] = useState(0);
    const [newNumber, setNewNumber] = useState(0);
    const [counter, setCounter] = useState(0);
    const [newCounter, setNewCounter] = useState(0);

    const result = useMemo(()=>{ 
        console.log("clicked from Memo");
        return Math.pow(number, 3);
    },[number]);
    
    function cubeNumber(num){
        const cube = Math.pow(num, 3);
        console.log(`New Number cube is  : ${cube}`); // This message renders every time
        return cube;
    }
    
    const newCubeResult = cubeNumber(newNumber);

    const handleClick = () => {
        setCounter(counter + 1);
        console.log(`clicked from counter ${counter}`);
    };
    
    const newHandleClick = () => {
        setNewCounter((prev)=> prev + 1);
        setNewCounter((prev)=> prev + 1);
        console.log(`clicked from NEW counter ${newCounter}`);
    };

    return (
    <div className="App">
        <input type='text' value={number} onChange={(e)=> setNumber(e.target.value)}></input>
        <div>Cube of number : {result}</div>

        <br/>
        <div> counter : {counter} </div>
        <button onClick={handleClick}>Counter++</button>
        <br />
        <br />
        <input
        type="text"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}></input>
        <div>Cube of number : {newCubeResult}</div>

        <br/>
        <div> New counter : {newCounter} </div>
        <button onClick={newHandleClick}>Counter++</button>
    </div>
  );
}
export default UseMemoDemo;