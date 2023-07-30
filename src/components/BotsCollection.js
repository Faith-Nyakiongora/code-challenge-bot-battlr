import React, { useEffect } from "react";

function BotsCollection({ collection, setCollection, armyBots, setArmyBots }) {
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((data) => data.json())
      .then((data) => {
        setCollection(data);

        console.log(collection);
      });
  }, []);

  const botCard = collection.map((bot, index) => {
    const { id, name, bot_class, catchphrase, avatar_url } = bot;

    //setting sellection of army bots on click
    function addToArmyBots() {
      if (!armyBots.some((enslistedBot) => enslistedBot.id === bot.id)) {
        setArmyBots((armyBots) => [...armyBots, bot]);
      }
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
