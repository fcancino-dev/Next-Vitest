import GithubUser from "../github-user/page";

async function fetchUserData() {
  const res = await fetch("https://api.github.com/users/fcancino-dev");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const userData = await fetchUserData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <GithubUser data={userData} />
    </main>
  );
}
