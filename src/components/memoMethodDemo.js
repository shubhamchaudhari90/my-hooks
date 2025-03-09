import { useMemo, useState } from 'react';
import MemoSupport from './memoSupport';

function UseMemoMethodDemo() {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
        console.log(`clicked from counter ${counter}`);
    };
    
    return (
    <div className="App">
        <MemoSupport></MemoSupport>
        <div> counter : {counter} </div>
        <button onClick={handleClick}>Counter++</button>
    </div>
  );
}
export default UseMemoMethodDemo;