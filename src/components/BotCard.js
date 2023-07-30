// import React from "react";

// function BotCard({ bot, collection }) {
//   const { id, name, bot_class, catchphrase, avatar_url } = bot;

//   //setting sellection of army bots on click
//   function addToArmyBots(event) {
//     // console.log(event.target.id);

//     const findBot = collection.find((bot) => {
//       console.log(bot.id, parseInt(event.target.id));
//       return bot.id === parseInt(event.target.id);
//     });
//     console.log(findBot);
//   }

//   return (
//     <div className="card col-4" id={bot.id} onClick={addToArmyBots}>
//       <img src={avatar_url} class="card-img-top" alt={name} />
//       <div className="card-body">
//         <h5 className="card-title">{name}</h5>
//         <p className="card-text">{bot_class}</p>
//       </div>
//       <div className="card-footer">
//         <small className="text-body-secondary">{catchphrase}</small>
//       </div>
//     </div>
//   );
// }

// export default BotCard;
