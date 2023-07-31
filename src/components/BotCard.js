import React from "react";

function BotCard({ bot, addToArmyBots }) {
  const { id, name, bot_class, catchphrase, avatar_url } = bot;

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
}

export default BotCard;
