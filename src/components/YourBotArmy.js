import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ armyBots, setArmyBots }) {
  return (
    <div className="row border border-danger">
      <div class="card col-4">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card Title</h5>
          <p class="card-text">Text</p>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">Random text</small>
        </div>
      </div>
    </div>
    // <div className="row border border-dan">
    //   <h2>Your Bot Army</h2>
    //   <div>
    //     {armyBots.map((bot) => (
    //       <BotCard key={bot.id} bot={bot} />
    //     ))}
    //   </div>
    // </div>
  );
}

export default YourBotArmy;
