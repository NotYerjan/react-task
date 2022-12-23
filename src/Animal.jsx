import React from "react";

export default function Animal({ animal }) {
  return (
    <div>
      <h3>Type: {animal.type}</h3>
      <ul>
        <li>Journeys to Desert: {animal.journeys.desert.no} </li>
        <li>Journeys to Lake: {animal.journeys.lake.no} </li>
        <li>Position: {animal.isHere ? "in the forest" : "in the journey"}</li>
      </ul>
      <h4>List of items</h4>
      <ol>
        {animal.items?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
    </div>
  );
}
