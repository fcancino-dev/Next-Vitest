"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
}

const GithubUser: React.FC<{ user: User }> = ({ user }) => {
  if (!user) return <div>Loading...</div>;

  return (
    <div className="">
      <h1>{user.login}</h1>
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        width={100}
        height={100}
      />
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        Visit Profile
      </a>
    </div>
  );
};

export default GithubUser;
