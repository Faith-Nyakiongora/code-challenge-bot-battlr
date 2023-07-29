import React from "react";

function BotCard({ bot }) {
  const { id, name, bot_class, catchphrase, avatar_url } = bot;

  return (
    <div className="card col-4">
      <img src={avatar_url} class="card-img-top" alt={name} />
      <div className="card-body" onClick={addToArmyBots}>
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
