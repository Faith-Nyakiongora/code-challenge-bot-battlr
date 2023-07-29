import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

function BotsCollection({ collection, setCollection }) {
  return (
    <div className="row">
      {collection.map((bot) => (
        <BotCard key={bot.id} bot={bot} />
      ))}
    </div>
  );
}

export default BotsCollection;
