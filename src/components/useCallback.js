import { useCallback, useState } from 'react';
import CallbackSupport from './callbackSupport';

function CallbackDemo() {
    const [counter, setCounter] = useState(0);
    const [newCounter, setNewCounter] = useState(0);
    const handleClick = () => {
        setCounter(counter + 1);
        console.log(`clicked from counter ${counter}`);
    };

    const newHandleClick = () => {
        setNewCounter(counter + 1);
        console.log(`clicked from counter ${counter}`);
    };
    
    const newFunction = useCallback(() => {
        console.log(`clicked from newFunction ${counter}`);
    }, [counter]);

    return (
    <div className="App">
        <CallbackSupport newFN={newFunction } ></CallbackSupport>
        <div> counter : {counter} </div>
        <button onClick={handleClick}>Counter++</button>
        <br />
        <br />
        <div> New counter : {newCounter} </div>
        <button onClick={newHandleClick}>Counter++</button>
    </div>
  );
}
export default CallbackDemo;