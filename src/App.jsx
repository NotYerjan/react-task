import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Animal from "./Animal";
import Controls from "./Controls";
import Place from "./Place";

const INIT_DESERT = {
  id: nanoid(),
  name: "DESERT",
  items: [
    // { id: nanoid(), name: "armor titan" },
    // { id: nanoid(), name: "blashphemous sword" },
    { id: nanoid(), name: "ring of light" },
    { id: nanoid(), name: "ancient helmet" },
    { id: nanoid(), name: "shield of desert" },
  ],
  image:
    "https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg?w=400&h=300&c=crop",
};

const INIT_LAKE = {
  id: nanoid(),
  name: "LAKE",
  items: [
    { id: nanoid(), name: "armor of god" },
    { id: nanoid(), name: "sword of immortal" },
    { id: nanoid(), name: "ring of power" },
    // { id: nanoid(), name: "dragon helmet" },
    // { id: nanoid(), name: "arctic shield" },
  ],
  image:
    "https://www.travelandleisure.com/thmb/PtkzpF17oxHfxuTbsnUx7oJY20A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lake-tahoe-california-USLAKES0920-59df9ea26eaf4bbba7620eb604f0af3c.jpg",
};

const INIT_ANIMAL = {
  id: nanoid(),
  type: null,
  journeys: {
    desert: {
      no: 0,
    },
    lake: {
      no: 0,
    },
  },
  items: [],
  isHere: true,
};

function App() {
  const [animal, setAnimal] = useState(INIT_ANIMAL);
  const [desert, setDesert] = useState(INIT_DESERT);
  const [lake, setLake] = useState(INIT_LAKE);

  const [currentJourney, setCurrentJourney] = useState("desert");

  return (
    <div className="App">
      <Animal animal={animal} />
      <Controls
        setAnimal={setAnimal}
        isHere={animal.isHere}
        currentJourney={currentJourney}
        setCurrentJourney={setCurrentJourney}
        setDesert={setDesert}
        setLake={setLake}
        items={currentJourney === "lake" ? lake.items : desert.items}
      />
      <Place currentJourney={currentJourney} desert={desert} lake={lake} />
    </div>
  );
}

export default App;
