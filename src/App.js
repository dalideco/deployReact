import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [Weather, setWeather] = useState("No Data");

  useEffect(() => {
    axios.get(
      "https://api.openweathermap.org/data/2.5/weather?appid=c8e1a2e8db6cfe5e248afebb4be0b523&q=Paris&units=metric"
    ).then(response =>{
      setWeather(response.data.main.temp);
    })
  }, [])

  return (
    <div className="App">
      <h1>
        hello world
      </h1>
      <h2> the weather is : </h2>
      <h3> {Weather} </h3>
    </div>
  );
}

export default App;
