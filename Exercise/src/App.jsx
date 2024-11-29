import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const url = " https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    
    setData(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetched Data</h1>
        {data && data.map((item) => {
          <div key={item.id}>
            {item.title} {item.}
          </div>
        })}
    </div>
  );
}

export default App;
