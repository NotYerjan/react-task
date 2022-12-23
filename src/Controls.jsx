import React, { useRef } from "react";

export default function Controls({
  setAnimal,
  isHere,
  currentJourney,
  setCurrentJourney,
  items,
  setDesert,
  setLake,
}) {
  const typeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const animalType = typeRef.current.value;
    setAnimal((animal) => ({ ...animal, type: animalType }));
  };

  const handleJourney = () => {
    const newItem = !isHere
      ? items[Math.floor(Math.random() * items.length)]
      : null;

    if (currentJourney === "lake" && newItem) {
      setLake((lake) => ({
        ...lake,
        items: lake.items.filter((item) => item.id !== newItem.id),
      }));
    }
    if (currentJourney === "desert" && newItem) {
      setDesert((desert) => ({
        ...desert,
        items: desert.items.filter((item) => item.id !== newItem.id),
      }));
    }

    setAnimal((animal) => {
      return {
        ...animal,
        isHere: !animal.isHere,
        journeys: isHere
          ? {
              ...animal.journeys,
              [currentJourney]: { no: animal.journeys[currentJourney].no + 1 },
            }
          : animal.journeys,
        items: !isHere ? [...animal.items, newItem] : animal.items,
      };
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" ref={typeRef} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleJourney}>
        {isHere ? "Go on a Journey" : "Return from the Journey"}
      </button>
      <select
        value={currentJourney}
        onChange={(e) => setCurrentJourney(e.target.value)}
        disabled={!isHere}
      >
        <option value="lake">Lake</option>
        <option value="desert">Desert</option>
      </select>
    </div>
  );
}
