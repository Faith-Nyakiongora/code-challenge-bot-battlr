import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

function BotsCollection({ collection, setCollection }) {
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((data) => data.json())
      .then((data) => {
        setCollection(data);

        console.log(collection);
      });
  }, []);

  return (
    <div className="row">
      {collection.map((bot) => (
        <BotCard key={bot.id} bot={bot} />
      ))}
    </div>
  );
}

export default BotsCollection;
