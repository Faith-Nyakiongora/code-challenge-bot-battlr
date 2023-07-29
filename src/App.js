import logo from "./logo.svg";
// import "./App.css";
import React, { useState, useEffect } from "react";
import BotsCollection from "./components/BotsCollection";

function App() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000bots")
      .then((response) => response.json())
      .then((data) => setCollection(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <BotsCollection collection={collection} setCollection={setCollection} />
    </div>
  );
}

export default App;
