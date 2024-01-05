import { useState } from "react";
import "./PasswordGenerator.css";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12); // Set an initial value for length
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const generatePass = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    number ? (str += "1234567890") : "";
    symbol ? (str += "$%^(){}[]|?/`~!") : "";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  };

  return (
    <div>
      <div className="card-container">
        <h2>Password Generator App</h2>
        <hr />
        <div>
          <input value={password} type="text" readOnly />
        </div>
        <div>
          <label htmlFor="lengthRange">
            Password Length: <span>({length})</span>
            <input
              id="lengthRange"
              type="range"
              value={length}
              min={6}
              max={30}
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </label>
          <label htmlFor="numberCheckbox">
            Include Numbers:
            <input
              id="numberCheckbox"
              type="checkbox"
              checked={number}
              onChange={() => setNumber(!number)}
            />
          </label>
          <label htmlFor="symbolCheckbox">
            Include Symbols:
            <input
              id="symbolCheckbox"
              type="checkbox"
              checked={symbol}
              onChange={() => setSymbol(!symbol)}
            />
          </label>
          <br />
          <button onClick={generatePass}>Generate Password</button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
