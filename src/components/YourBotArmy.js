import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ armyBots, onReleaseBot, onDischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {armyBots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onReleaseBot={onReleaseBot}
            onDischargeBot={onDischargeBot}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
