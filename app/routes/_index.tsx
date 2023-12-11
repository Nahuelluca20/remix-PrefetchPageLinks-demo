import { PrefetchPageLinks, useFetcher } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import type { loader as resourceLoader } from "./resource";
import type { Character } from "~/types/character";

export const meta: MetaFunction = () => {
  return [
    { title: "PrefetchPageLinks + Cache" },
    {
      name: "description",
      content: "Use PrefetchPageLinks and cache the data ",
    },
  ];
};

export default function Index() {
  let fetcher = useFetcher<typeof resourceLoader>();
  console.log(fetcher.data);
  return (
    <>
      <PrefetchPageLinks page="/resource" />
      <button type="button" onClick={() => fetcher.load("/resource")}>
        Get Morty data
      </button>
      {fetcher.data && <DisplayData data={fetcher.data} />}
    </>
  );
}

function DisplayData({ data }: { data: Character }) {
  return (
    <div>
      <img
        src={data.image}
        alt={data.name + " " + data.species}
        width={200}
        height={200}
      />
      <p>{data.name}</p>
      <p>{data.species}</p>
      <p>{data.status}</p>
    </div>
  );
}
