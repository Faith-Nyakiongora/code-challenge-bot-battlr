import React, { useState, useEffect } from "react";

function BotsCollection() {
  const [collection, setcollection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((data) => data.json())
      .then((data) => {
        setcollection(data);

        console.log(collection);
      });
  }, []);

  return (
    <div>
      <h1>Bots Battlr</h1>
    </div>
  );
}

export default BotsCollection;
