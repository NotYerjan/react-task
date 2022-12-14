import React from "react";

export default function Animal({ animal }) {
  return (
    <div>
      <ul>
        <li>Type: {animal.type}</li>
        <li>Number of Journeys: {animal.journeysNo}</li>
        <li>
          Position: {animal.isHere ? "in the forest" : "not in the forest"}
        </li>
      </ul>
    </div>
  );
}
