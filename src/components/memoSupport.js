import React from "react";
function MemoSupport() {
  console.log("Render from Memoth Support Component.");
    
    return (
    <div className="App">
      <div> Header </div>
    </div>
  );
}
export default React.memo( MemoSupport);