"use client";
import React from "react";
import { useState } from "react";

export default function Button() {
  const [clicked, setClicked] = useState(false);

  const reset = () => {
    setClicked(false);
  };

  return (
    <>
      <button
        type="button"
        className="text-2xl font-bold underline text-black"
        onClick={() => setClicked(true)}
      >
        {clicked ? "Clic" : "Hazme clic"}
      </button>
      {clicked && (
        <button onClick={reset} className="text-lg ">
          Reset
        </button>
      )}
    </>
  );
}
