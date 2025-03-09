import React, { useState } from "react";

function ChildOne({ sendDataToParent }) {
  const [inputData, setInputData] = useState("");

  // Handle the change of input and send data back to parent
  const handleChange = (event) => {
    setInputData(event.target.value);
  };

  const handleSubmit = () => {
    // Call the function passed from the parent to send data back
    sendDataToParent(inputData);
  };

  return (
    <div>
      <input
        type="text"
        value={inputData}
        onChange={handleChange}
        placeholder="Type something"
      />
      <button onClick={handleSubmit}>Send Data to Parent</button>
    </div>
  );
}

export default ChildOne;
