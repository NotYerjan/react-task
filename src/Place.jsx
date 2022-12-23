import React from "react";

function Place({ currentJourney, desert, lake }) {
  return (
    <div>
      {currentJourney === "lake" && (
        <div>
          <h3>{lake.name}</h3>
          <img src={lake.image} alt="lake image" width="300" />
          <ol>
            {lake.items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ol>
        </div>
      )}
      {currentJourney === "desert" && (
        <div>
          <h3>{desert.name}</h3>
          <img src={desert.image} alt="desert image" width="300" />
          <ol>
            {desert.items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default Place;
