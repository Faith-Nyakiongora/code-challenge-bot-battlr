import React, { useEffect } from "react";
import BotCard from "./BotCard";

function BotsCollection({ collection, setCollection, armyBots, setArmyBots }) {
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((data) => data.json())
      .then((data) => {
        setCollection(data);

        console.log(collection);
      });
  }, []);

  //setting sellection of army bots on click
  function addToArmyBots(bot) {
    if (!armyBots.some((enslistedBot) => enslistedBot.id === bot.id)) {
      setArmyBots((armyBots) => [...armyBots, bot]);
    }
  }

  return (
    <div className="row">
      {collection.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          addToArmyBots={() => addToArmyBots(bot)}
        />
      ))}
    </div>
  );
}

export default BotsCollection;
