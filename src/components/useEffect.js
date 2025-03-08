import { useEffect, useState } from 'react';

function UseEffectDemo() {

  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    console.log("useEffect called");
  }, [counter]);

  return (
    <div className="App">
        USE EFFECT DEMO : Program running from {counter} seconds.
    </div>
  );
}
export default UseEffectDemo;

// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// function UseEffectDemo() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Function to fetch data from an API
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         debugger;
//         setData(response.data); // Set the fetched data
//         if (response.data== null) {
//           throw new Error('Network response was not ok');
//         }
//         const data =  response.data;
//         setData(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData(); // Call the fetch function

//     // The empty dependency array means this effect will run only once when the component mounts.
//   }, []); 

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Fetched Data:</h1>
//       <ul>
//       {data.map((item, index) => (
//           <li key={index}>{item.title}</li> // key prop should be provided for each element in a list
//         ))}
//       </ul>
      
//     </div>
//   );
// }

// export default UseEffectDemo;
