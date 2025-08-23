import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [basic, change] = useState(10);
  const Increment = () => {basic >= 20 ?  null : change(basic + 1) };

  const Decrement = () => {if(basic <= -10) return 
    change(basic - 1);};

  return (
    <>
      <h1>hello</h1>
      <h3>{basic}</h3>
      <div>
        <button onClick={Increment}>Add Number</button>
        <button onClick={Decrement}>Decrease Number</button>
        <h1>{basic}</h1>
        <h5>{basic}</h5>
        <h1>{basic}</h1>
      </div>
    </>
  );
}

export default App;
