import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [isNumberAllowed, setIsNumberAllowed] = useState(false)
  const [isCharAllowed, setIsCharAllowed] = useState(false)

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center mb-4">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden">
        <input type="text" value={password} className="w-full py-1 px-3" />
        <button className="text-white bg-blue-700 px-3">Copy</button>
      </div>
      <div className="flex gap-x-2 text-sm">
        <div>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            name=""
            id=""
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          {length}
        </div>
      </div>
    </div>
  );
}

export default App;
