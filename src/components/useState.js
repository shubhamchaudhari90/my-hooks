import { useState } from 'react';

function UseStateDemo() {

  const colorNames = [
    "Red", "Green", "Blue", "Yellow", "Pink", "Purple", "Orange", "Brown",
    "Violet", "Indigo", "Cyan", "Magenta", "Lime", "Teal", "Lavender", "Beige",
    "Maroon", "Olive", "Turquoise", "Coral", "Salmon", "Gold", "Silver", "Bronze"
  ];

  const [color, setColor] = useState('red');
  const [carData, setCarData] = useState({
    carColor: "red",
    model: "BMW",
    year: 2023,
  });
  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colorNames.length);
    
    setColor(colorNames[randomIndex]);
    setCarData((prev)=>{
      return {...prev,carColor:colorNames[randomIndex]};
    });
  }

  return (
    <div className="App">
      <div style={{ color: `${color}` }}>My color is {color}</div>
      <div style={{ color: `${carData.carColor}` }}>Car color: {carData.carColor}, model : {carData.model} and year: {carData.year}</div>
      <button onClick={changeColor} >Change Color</button>
    </div>
  );
}
export default UseStateDemo;
