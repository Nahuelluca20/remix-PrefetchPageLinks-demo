import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const fetchData = await fetch("https://rickandmortyapi.com/api/character/2");
  const response = await fetchData.json();
  const data = response;
  // return data;

  // let headers = { "Cache-Control": "public, max-age=60" };
  return json(data, {
    // headers,
  });
};
