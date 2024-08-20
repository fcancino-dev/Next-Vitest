import React from "react";
import GithubUser from "./components/GithubUser";

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
}

const Home = async () => {
  const res = await fetch("https://api.github.com/users/fcancino-dev", {
    cache: "no-store", // Opcional: Asegura que obtienes los datos más recientes en cada solicitud
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  const user: User = await res.json();

  return (
    <div>
      <h1>GitHub User Information</h1>
      <GithubUser user={user} />
    </div>
  );
};
export default Home;
