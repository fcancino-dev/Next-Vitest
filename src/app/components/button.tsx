// Code: Button component
"use client";
import React from "react";

export default function Button() {
  const handleClick = () => {
    console.log("button clicked");
  };
  return (
    <>
      <button
        type="button"
        className="text-2xl font-bold underline text-black"
        onClick={handleClick}
      >
        Click me
      </button>
    </>
  );
}
