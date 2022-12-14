import React, { useRef } from "react";

export default function Controls({ setAnimal, isHere }) {
  const typeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const animalType = typeRef.current.value;
    setAnimal((animal) => ({ ...animal, type: animalType }));
  };

  const handleJourney = () => {
    setAnimal((animal) => {
      if (animal.isHere) {
        return {
          ...animal,
          isHere: !animal.isHere,
          journeysNo: animal.journeysNo + 1,
        };
      } else {
        return { ...animal, isHere: !animal.isHere };
      }
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
    </div>
  );
}
