"use client";
import React from "react";
import { useState } from "react";

export default function Button() {
  const [botontext, setBotontext] = useState(false);

  return (
    <>
      <button
        type="button"
        className="text-2xl font-bold underline text-black"
        onClick={() => setBotontext(true)}
      >
        {botontext ? "Clic" : "Hazme clic"}
      </button>
    </>
  );
}
