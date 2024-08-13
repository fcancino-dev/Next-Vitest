import Image from "next/image";
import React from "react";

interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
}

interface Props {
  data: GithubUser;
}

const GithubUser: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col  text-center">
      <div className="flex flex-col items-center">
        <h1>Github User</h1>
        <Image
          src={data.avatar_url}
          alt={data.login}
          width={100}
          height={100}
        />
      </div>
      <p>Username: {data.login}</p>
      <p>Profile URL: {data.html_url}</p>
    </div>
  );
};

export default GithubUser;
