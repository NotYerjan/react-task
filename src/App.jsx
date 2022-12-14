import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Animal from "./Animal";
import Controls from "./Controls";

function App() {
  const [animal, setAnimal] = useState({
    id: nanoid(),
    type: null,
    journeysNo: 0,
    isHere: true,
  });

  return (
    <div className="App">
      <Animal animal={animal} />
      <Controls setAnimal={setAnimal} isHere={animal.isHere} />
    </div>
  );
}

export default App;
