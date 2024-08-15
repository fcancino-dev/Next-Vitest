import React from "react";
import GithubUser from "./components/GithubUser";

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
}

interface HomeProps {
  user: User;
}

const Home: React.FC<HomeProps> = ({ user }) => {
  return (
    <div>
      <h1>GitHub User Information</h1>
      <GithubUser user={user} />
    </div>
  );
};

export async function getServerProps() {
  const res = await fetch("https://api.github.com/users/fcancino-dev");
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}

export default Home;
