import React from "react";

function YourBotArmy({ armyBots, setArmyBots }) {
  const handleReleaseBot = (botId) => {
    setArmyBots((armyBots) => armyBots.filter((bot) => bot.id !== botId));

    //Remove the bot from the backend
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Bot deleted from backend:", data);
      })
      .catch((error) => console.log("Error deleting bot:", error));
  };

  const botArmyCard = armyBots.map((bot) => (
    <div
      key={bot.id}
      className="card col-6"
      onClick={() => handleReleaseBot(bot.id)}
    >
      <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
      <div className="card-body">
        <h5 className="card-title">{bot.name}</h5>
        <p className="card-text">{bot.bot_class}</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">{bot.catchphrase}</small>
        <button type="button" className="btn btn-danger">
          X
        </button>
      </div>
    </div>
  ));

  return (
    <div className="row">
      <div className="card col-10 bot-army-section ">
        <h2>Your Bot Army</h2>
        {botArmyCard}
      </div>
    </div>
  );

}

export default YourBotArmy;
