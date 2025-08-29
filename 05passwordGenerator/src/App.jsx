import { useState, useEffect, useCallback, useRef } from "react";

import "./App.css";

function App() {
  const [range, setRange] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let char = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numberAllowed) char += "1234567890";
    if (charAllowed) char += "!@#$%^&*()_+_~:";
    for (let i = 1; i <= range; i++) {
      let random = Math.floor(Math.random() * char.length + 1);

      pass += char.charAt(random);

      setPassword(pass);
    }
  }, [range, numberAllowed, charAllowed, setPassword]);

  const passwordCopy = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [numberAllowed, charAllowed, range, passwordGenerator]);

  const passRef = useRef(null);

  console.log("i am pass ref", passRef);
  return (
    <>
      <div className="h-screen w-screen bg-gray-700 flex  justify-center">
        <div className="h-30 w-3/4 bg-white mt-12 rounded-md">
          <div className="w-full h-10 mt-2">
            <input
              className="w-[80%] h-full border-2 border-black rounded mr-2 ml-4 c text-black"
              value={password}
              type="text"
              readOnly
              ref={passRef}
            />
            <button
              className="text-white w-[15%] h-full bg-black rounded cursor-pointer"
              onClick={passwordCopy}
            >
              Copy
            </button>
          </div>
          <div className="flex mt-5 ml-4">
            <div className="mr-7 flex items-center justify-center">
              <input
                className="cursor-pointer"
                min={8}
                max={100}
                type="range"
                value={range}
                onChange={(e) => {
                  setRange(e.target.value);
                }}
              />
              <label className="text-black ml-4"> Range {range}</label>
            </div>
            <div className="flex items-center justify-center">
              <input
                className="text-black"
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={setNumberAllowed}
              />
              <label className="text-black ml-4"> Number {}</label>
            </div>
            <div className="ml-7 flex items-center justify-center">
              <input
                className="text-black"
                type="checkbox"
                defaultChecked={charAllowed}
                onChange={setCharAllowed}
              />
              <label className="text-black ml-4"> Special Char </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
