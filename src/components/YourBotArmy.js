import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ armyBots }) {
  const botArmyCard = armyBots.map(() => (
    <div className="row">
      <div class="card col-4">
        <img
          src={armyBots.avatar_url}
          class="card-img-top"
          alt={armyBots.name}
        />
        <div class="card-body">
          <h5 class="card-title">{armyBots.name}</h5>
          <p class="card-text">{armyBots.bot_class}</p>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">Random text</small>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="row border border-success">
      <div class="card col-4">{botArmyCard}</div>
    </div>
  );
  // <div className="row border border-dan">
  //   <h2>Your Bot Arsmy</h2>
  //   <div>
  //     {armyBots.map((bot) => (
  //       <BotCard key={bot.id} bot={bot} />
  //     ))}
  //   </div>
  // </div>
}

export default YourBotArmy;
