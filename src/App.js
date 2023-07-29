import logo from "./logo.svg";
// import "./App.css";
import React, { useState, useEffect } from "react";
import BotsCollection from "./components/BotsCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [collection, setCollection] = useState([]);
  const [armyBots, setArmyBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((data) => data.json())
      .then((data) => {
        setCollection(data);

        console.log(collection);
      });
  }, []);

  console.log(collection);

  return (
    <div className="container">
      <YourBotArmy armyBots={armyBots} setArmyBots={setArmyBots} />
      <BotsCollection collection={collection} setCollection={setCollection} />
    </div>
  );
}

export default App;
