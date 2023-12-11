import type { Character } from "~/types/character";

export default function DisplayData({ data }: { data: Character }) {
  return (
    <div className="bg-zinc-700 text-white rounded-md">
      <img
        src={data.image}
        className="rounded-md"
        alt={data.name + " " + data.species}
        width={250}
        height={250}
      />
      <div className="font-semibold space-y-3 px-5 py-2 text-start">
        <p>Name: {data.name}</p>
        <p>Specie: {data.species}</p>
        <p>Status: {data.status}</p>
      </div>
    </div>
  );
}
