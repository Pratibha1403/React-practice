import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200 bg-green-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-3 px-4 rounded-3xl">
          
            <button onClick={() => setColor("red")} className="rounded-full shadow-xl px-4 py-1">Red</button>
          
            <button onClick={() => setColor("green")} className="rounded-full shadow-xl px-4 py-1">Green</button>

            <button onClick={() => setColor("pink")} className="rounded-full shadow-xl px-4 py-1">Pink</button>

            <button onClick={() => setColor("blue")} className="rounded-full shadow-xl px-4 py-1">Blue</button>

            <button onClick={() => setColor("purple")} className="rounded-full shadow-xl px-4 py-1">Purple</button>



          
        </div>
      </div>
    </div>
  );
}

export default App;
