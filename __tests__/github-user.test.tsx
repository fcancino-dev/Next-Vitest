// // __tests__/home.test.tsx
// import { render, screen, waitFor } from "@testing-library/react";
// import { vi } from "vitest";
// import Home from "../src/app/page";
// import Image from "next/image";

// // Mock del componente Image de Next.js
// vi.mock("next/image", () => ({
//   default: ({
//     src,
//     alt,
//     width,
//     height,
//   }: {
//     src: string;
//     alt: string;
//     width: number;
//     height: number;
//   }) => <Image src={src} alt={alt} width={width} height={height} />,
// }));

// // Mock de la función fetch
// global.fetch = vi.fn(
//   () =>
//     Promise.resolve({
//       json: () =>
//         Promise.resolve({
//           login: "fcancino-dev",
//           avatar_url: "https://avatars.githubusercontent.com/u/38081852?v=4",
//           html_url: "https://api.github.com/users/fcancino-dev",
//         }),
//     }) as Promise<Response>
// );

// describe("Home Page", () => {
//   test("fetches and displays user data", async () => {
//     render(<Home />);

//     // Espera a que los datos se muestren en la pantalla
//     await waitFor(() => {
//       expect(screen.getByText("Username: fcancino-dev")).toBeInTheDocument();
//       const img = screen.getByAltText(/fcancino-dev/i);
//       expect(img).toHaveAttribute(
//         "src",
//         "https://avatars.githubusercontent.com/u/38081852?v=4"
//       );
//       expect(
//         screen.getByText(
//           /Profile URL: https:\/\/api.github.com\/users\/fcancino-dev/i
//         )
//       ).toBeInTheDocument();
//     });
//   });
// });

import { test, expect } from "vitest";
import Home from "../src/app/page";
import { render, screen, waitFor } from "@testing-library/react";

test("renders correctly", async () => {
  const userData = await fetchUserData();
  const { getByText } = await render(<Home {...userData} />);
  await waitFor(() => expect(getByText("Github User")).toBeInTheDocument());
});

async function fetchUserData() {
  const res = await fetch("https://api.github.com/users/fcancino-dev");
  const data = await res.json();
  return data;
}
