import { PrefetchPageLinks, useFetcher } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import type { loader as resourceLoader } from "./resource";
import DisplayData from "~/components/display-data";

export const meta: MetaFunction = () => {
  return [
    { title: "PrefetchPageLinks + Cache" },
    {
      name: "description",
      content:
        "Use PrefetchPageLinks and cache the data with Rick and Mory API",
    },
  ];
};

export default function Index() {
  let fetcher = useFetcher<typeof resourceLoader>();

  return (
    <main className="space-y-10 text-center">
      <PrefetchPageLinks page="/resource" />
      <button
        className="bg-blue-500 text-white text-xl font-semibold rounded-md py-2 px-4"
        type="button"
        onClick={() => fetcher.load("/resource")}
      >
        Get Morty data
      </button>
      {fetcher.data && <DisplayData data={fetcher.data} />}
    </main>
  );
}
