"use client";
// import Image from "next/image";
import React, { useEffect, useState } from "react";

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
}

const GithubUser: React.FC<{ user: User }> = ({ user }) => {
  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-xl font-medium">{user.login}</h1>
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        width={100}
        height={100}
      />
      <a
        className="text-xl hover:text-blue-500 hover:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Profile
      </a>
    </div>
  );
};

export default GithubUser;
