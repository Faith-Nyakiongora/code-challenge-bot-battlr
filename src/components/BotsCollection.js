import React from "react";
// import BotCard from "./BotCard";

function BotsCollection({ collection, armyBots, setArmyBots }) {
  const botCard = collection.map((bot, index) => {
    const { id, name, bot_class, catchphrase, avatar_url } = bot;

    //setting sellection of army bots on click
    function addToArmyBots() {
      setArmyBots((armyBots) => [...armyBots, bot]);
    }

    return (
      <div key={id} className="card col-4" id={id} onClick={addToArmyBots}>
        <img src={avatar_url} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{bot_class}</p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">{catchphrase}</small>
        </div>
      </div>
    );
  });

  return <div className="row">{botCard}</div>;
}

export default BotsCollection;
