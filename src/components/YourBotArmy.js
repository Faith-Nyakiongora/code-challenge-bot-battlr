import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ armyBots, setArmyBots }) {
  const handleReleaseBot = (botId) => {
    setArmyBots((armyBots) => armyBots.filter((bot) => bot.id !== botId));
  };

  const botArmyCard = armyBots.map((bot) => (
    <div
      key={bot.id}
      className="card col-4"
      onClick={() => handleReleaseBot(bot.id)}
    >
      <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
      <div className="card-body">
        <h5 className="card-title">{bot.name}</h5>
        <p className="card-text">{bot.bot_class}</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">{bot.catchphrase}</small>
      </div>
    </div>
  ));

  return (
    <div className="row">
      <div className="card col-4">{botArmyCard}</div>
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
