import React, { useEffect, useState, useRef } from "react";

const svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
    />
  </svg>
);

const Container = () => {
  const [password, setPassword] = useState("");
  const [size, setSize] = useState("6");
  const [numbers, setNumbers] = useState(false);
  const [chars, setChars] = useState(false);

  const passwordRef = useRef(null);

  const copyPassword = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  useEffect(() => {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const nums = "0123456789";
    const Ch = "~!@#$%^&*()_+=/?";
    let sets = alphabets;
    let tempPassword = "";
    for (let i = 1; i <= size; i++) {
      if (numbers) sets += nums;
      if (chars) sets += Ch;
      let temp = Math.floor(Math.random() * sets.length);
      tempPassword += sets[temp];
    }
    setPassword(tempPassword);
  }, [numbers, chars, size]);

  return (
    <div className="h-auto w-full md:w-2/3 lg:w-1/2 xl:w-1/3 shadow-lg text-red-700 rounded-md bg-gray-700 text-center p-6 m-6 border-2 border-red-700 hover:-translate-y-1 scale-110 duration-100 cursor-pointer hover:bg-gray-500">
      <div className="flex items-center justify-center">
        <input
          className="rounded-l-lg w-full h-10 p-4 text-lg outline-none"
          type="text"
          value={password}
          readOnly
          placeholder="Password"
          ref={passwordRef}
        />
        <div className="w-10 h-10 rounded-r-lg bg-blue-800 cursor-pointer hover:bg-white flex items-center justify-center">
          <button onClick={copyPassword}>{svg}</button>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-2 text-red-950">
        <div>
          <input
            type="range"
            min={6}
            max={100}
            className="cursor-pointer"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          Size({size})
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={numbers}
            id="numberInput"
            onChange={() => setNumbers(!numbers)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={chars}
            id="charInput"
            onChange={() => setChars(!chars)}
          />
          <label htmlFor="charInput">Chars</label>
        </div>
      </div>
    </div>
  );
};

export default Container;
