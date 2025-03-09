import React, { useState } from "react";
import ChildOne from "./childOne";
import ChildTwo from "./childTwo";


function Parent() {
  // State to store the data coming from the child
  const [childData, setChildData] = useState("");

  // Callback function that will be passed to the child
  const handleDataFromChild = (data) => {
    setChildData(data); // Update the parent's state with data from child
  };

  return (
    <div>
      <h1>Data from Child: {childData}</h1>
      {/* Passing the callback function to the child component */}
      <ChildOne sendDataToParent={handleDataFromChild} />
      <ChildTwo sendDataToParent={handleDataFromChild}></ChildTwo>
      <div>Data from child {childData}</div>
    </div>
  );
}

export default Parent;
