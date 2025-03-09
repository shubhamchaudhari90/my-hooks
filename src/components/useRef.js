import { useRef } from 'react';

function UseRefDemo() {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.style.backgroundColor = "red";
    console.log(inputRef.current);
  };

  return (
    <div className="App">

      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
export default UseRefDemo;