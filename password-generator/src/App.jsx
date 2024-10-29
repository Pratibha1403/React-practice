import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null)
 

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(NumberAllowed) str += '0123456789'
    if(CharAllowed) str += '!@#$%^&*()_+'

    for(let i=0;i<length;i++){
      const char= Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    console.log(pass,"pass")
    
    setPassword(pass)
  },[length, NumberAllowed, CharAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }
  useEffect(() => {
    generatePassword()
  },[length, NumberAllowed, CharAllowed])
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center mb-4">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={password} className="w-full py-1 px-3" useRef={passwordRef} readOnly />
        <button className="text-white bg-blue-700 px-3" onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className="flex gap-x-2 text-sm">
        <div className="flex items-center gap-x-1">
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
          <label htmlFor="length">Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={NumberAllowed}
            onChange={() => {setNumberAllowed((prev) => !prev)}}
            name=""
            id=""
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={CharAllowed}
            onChange={() => {setCharAllowed((prev) => !prev)}}
            name=""
            id=""
          />
          <label htmlFor="char">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
