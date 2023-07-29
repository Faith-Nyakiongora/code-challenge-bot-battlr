import React from "react";

function BotCard({ bot }) {
  const { id, name, bot_class, avatar_url } = bot;

  return (
    <div class="card col-4">
      <img src={avatar_url} class="card-img-top" alt={name} />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{bot_class}</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  );
}

export default BotCard;
