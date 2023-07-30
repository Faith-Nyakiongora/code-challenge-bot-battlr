// import logo from "./logo.svg";
// import "./App.css";
import React, { useState, useEffect } from "react";
import BotsCollection from "./components/BotsCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [collection, setCollection] = useState([]);
  const [armyBots, setArmyBots] = useState([]);

  console.log(armyBots);

  return (
    <div className="container">
      <YourBotArmy armyBots={armyBots} setArmyBots={setArmyBots} />
      <BotsCollection
        collection={collection}
        setCollection={setCollection}
        setArmyBots={setArmyBots}
        armyBots={armyBots}
      />
    </div>
  );
}

export default App;
