import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const data = { message: "This is a message" };
  // let headers = { "Cache-Control": "public, max-age=60" };
  return json(data, {
    // headers,
  });
};
